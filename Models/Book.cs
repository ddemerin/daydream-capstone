using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace daydream_capstone.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        // public DateTime DateWritten { get; set; }
        public List<Page> Pages { get; set; } = new List<Page>();

        public int AuthorId { get; set; }
        [JsonIgnore]
        public Author Author { get; set; }
    }
}