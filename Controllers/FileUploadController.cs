// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using CloudinaryDotNet;
// using CloudinaryDotNet.Actions;
// using daydream_capstone.Models;
// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Mvc;

// namespace daydream_capstone.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class FileUploadController : ControllerBase
//     {

//         private readonly DatabaseContext _context;

//         public FileUploadController(DatabaseContext context)
//         {
//             _context = context;
//         }

//         [HttpPost("book/{Id}")]
//         public async Task<ActionResult<Models.Page>> UploadFile([FromRoute]int Id, IFormFile file)
//         {
//             var extension = file.FileName.Split('.').Last();
//             var contentType = file.ContentType;
//             if ((extension == "jpeg" || extension == "jpg" || extension == "png") && contentType == "image/jpeg" || contentType == "image/png")
//             {
//                 var cloudinary = new Cloudinary(new Account("ddemerin", "867338739995681", "nTFKC24ATil4vdqGqqvThHC9Wu4"));
//                 var uploudParams = new ImageUploadParams()
//                 {
//                     File = new FileDescription(file.FileName, file.OpenReadStream())
//                 };
//                 var results = cloudinary.Upload(uploudParams);
//                 var uploadedImage = new Models.Page
//                 {
//                     ImageUrl = results.SecureUri.AbsoluteUri
//                 };
//                 var book = await _context.Books.FirstOrDefaultAsync();
//                 if (book == null)
//                 {
//                     return NotFound();
//                 }
//                 book.Pages.AddAsync(uploadedImage);
//                 await _context.SaveChangesAsync();
//                 return Ok(uploadedImage);
//             }
//             else
//             {
//                 return BadRequest("Not a valid Image");
//             }
//         }
//     }
// }