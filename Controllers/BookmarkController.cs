using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace daydream_capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarkController : ControllerBase
    {
        [HttpPost("{bookId")]
        public async Task<ActionResult> BookmarkBookForUser(int bookId)
        {

        }
    }
}