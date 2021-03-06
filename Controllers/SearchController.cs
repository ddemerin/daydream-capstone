using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using daydream_capstone.Models;

namespace daydream_capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private DatabaseContext _context;

        public SearchController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet("books")]
        public async Task<ActionResult> SearchBooks(string searchTerm)
        {
            var results = _context.Books.Include(i => i.Pages).Where(b => b.Title.ToLower().Contains(searchTerm.ToLower()));

            return Ok(await results.ToListAsync());
        }
    }
}