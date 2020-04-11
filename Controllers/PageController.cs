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
    public class PageController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public PageController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Page
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Models.Page>>> GetPages()
        {
            return await _context.Pages.OrderBy(page => page.Id).ToListAsync();
        }

        // GET: api/Page/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Models.Page>> GetPage(int id)
        {
            var page = await _context.Pages.FindAsync(id);

            if (page == null)
            {
                return NotFound();
            }

            return page;
        }

        // PUT: api/Page/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPage(int id, Models.Page page)
        {
            if (id != page.Id)
            {
                return BadRequest();
            }

            _context.Entry(page).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PageExists(id))
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

        // POST: api/Page
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        // [HttpPost]
        // public async Task<ActionResult<Models.Page>> UploadFile([FromRoute]int Id, IFormFile file)
        // {
        //     var extension = file.FileName.Split('.').Last();
        //     var contentType = file.ContentType;
        //     if ((extension == "jpeg" || extension == "jpg" || extension == "png") && contentType == "image/jpeg" || contentType == "image/png")
        //     {
        //         var cloudinary = new Cloudinary(new Account("ddemerin", "867338739995681", "nTFKC24ATil4vdqGqqvThHC9Wu4"));
        //         var uploudParams = new ImageUploadParams()
        //         {
        //             File = new FileDescription(file.FileName, file.OpenReadStream())
        //         };
        //         var results = cloudinary.Upload(uploudParams);
        //         var uploadedImage = new Models.Page
        //         {
        //             ImageUrl = results.SecureUri.AbsoluteUri
        //         };
        //         await _context.SaveChangesAsync();
        //         return Ok(uploadedImage);
        //     }
        //     else
        //     {
        //         return BadRequest("Not a valid Image");
        //     }
        // }

        // DELETE: api/Page/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Models.Page>> DeletePage(int id)
        {
            var page = await _context.Pages.FindAsync(id);
            if (page == null)
            {
                return NotFound();
            }

            _context.Pages.Remove(page);
            await _context.SaveChangesAsync();

            return page;
        }

        private bool PageExists(int id)
        {
            return _context.Pages.Any(e => e.Id == id);
        }
    }
}
