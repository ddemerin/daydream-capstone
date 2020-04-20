using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using daydream_capstone.Models;
using daydream_capstone.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace daydream_capstone.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private DatabaseContext _context;

        public AuthController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpPost("signup")]
        public async Task<ActionResult> SignUpUser(NewUser newUser)
        {
            // validate user data
            if (newUser.Password.Length < 7)
            {
                return BadRequest("Password must be at least 7 characters!");
            }
            // does user exist
            var doesUserExist = await _context.Users.AnyAsync(user => user.Email.ToLower() == newUser.Email.ToLower());
            if (doesUserExist)
            {
                return BadRequest("User already exists with that email!");
            }
            // hash the password
            var user = new User
            {
                Email = newUser.Email,
                FullName = newUser.FullName,
            };
            var hashed = new PasswordHasher<User>().HashPassword(user, newUser.Password);
            user.HashedPassword = hashed;
            // store user data
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            // generate a JWT

            return Ok(user);
        }
    }
}