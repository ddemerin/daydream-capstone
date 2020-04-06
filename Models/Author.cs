using System;
using System.Collections.Generic;

namespace daydream_capstone.Models
{
    public class Author
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Blurb { get; set; }
        public List<Book> Books { get; set; } = new List<Book>();
    }
}