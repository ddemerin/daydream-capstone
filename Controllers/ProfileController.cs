using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using daydream_capstone.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace daydream_capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ProfileController : ControllerBase
    {

        readonly private DatabaseContext _context;
        public ProfileController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetCurrentUser()
        {
            // grab id from JWT
            var userId = int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "id").Value);
            // query the database for the user with that id
            var user = await _context.Users.Include(i => i.Bookmarks).ThenInclude(i => i.Book).ThenInclude(i => i.Pages).FirstOrDefaultAsync(f => f.Id == userId);
            // return user's profile
            return Ok(user);
        }
    }
}