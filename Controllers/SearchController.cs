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
            var results = _context.Books.Where(b => b.Title.ToLower().Contains(searchTerm.ToLower()));
            var pages = results.Include(p => p.Pages);

            return Ok(await pages.ToListAsync());
        }
    }
}