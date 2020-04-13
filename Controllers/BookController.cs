using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using daydream_capstone.Models;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace daydream_capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public BookController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Book
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            return await _context.Books.ToListAsync();
        }

        // GET: api/Book/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await _context.Books.FindAsync(id);

            if (book == null)
            {
                return NotFound();
            }

            return book;
        }

        // PUT: api/Book/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook(int id, Book book)
        {
            if (id != book.Id)
            {
                return BadRequest();
            }

            _context.Entry(book).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Book
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{bookId}/page")]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {
            _context.Books.Add(book);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBook", new { id = book.Id }, book);
        }
        [HttpPost("{bookId}/page")]
        public async Task<ActionResult<Models.Page>> UploadFile([FromRoute]int bookId, IFormFile file)
        {
            var extension = file.FileName.Split('.').Last();
            var contentType = file.ContentType;
            if ((extension == "jpeg" || extension == "jpg" || extension == "png") && contentType == "image/jpeg" || contentType == "image/png")
            {
                var cloudinary = new Cloudinary(new Account("ddemerin", "867338739995681", "nTFKC24ATil4vdqGqqvThHC9Wu4"));
                var uploudParams = new ImageUploadParams()
                {
                    File = new FileDescription(file.FileName, file.OpenReadStream())
                };
                var results = cloudinary.Upload(uploudParams); var uploadedImage = new Models.Page
                {
                    ImageUrl = results.SecureUri.AbsoluteUri,
                    BookId = bookId,
                    Id = 2,
                };
                _context.Pages.Add(uploadedImage);
                await _context.SaveChangesAsync();
                return Ok(uploadedImage);
            }
            else
            {
                return BadRequest("Not a valid Image");
            }
        }

        // DELETE: api/Book/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Book>> DeleteBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return book;
        }

        private bool BookExists(int id)
        {
            return _context.Books.Any(e => e.Id == id);
        }
    }
}
