using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using daydream_capstone.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace daydream_capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

    public class BookmarkController : ControllerBase
    {

        private readonly DatabaseContext _context;

        public BookmarkController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpPost("{bookId}")]
        public async Task<ActionResult> BookmarkBookForUser(int bookId)
        {
            // get userId from user object
            var userId = int.Parse(User.Claims.FirstOrDefault(f => f.Type == "id").Value);
            // create new bookmark
            var bookmark = new Bookmark
            {
                BookId = bookId,
                UserId = userId,
            };
            // save to database
            _context.Bookmarks.Add(bookmark);
            await _context.SaveChangesAsync();
            return Ok(bookmark);
        }
    }
}