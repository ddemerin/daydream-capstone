using System;
using System.Text.Json.Serialization;

namespace daydream_capstone.Models
{
    public class Page
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public DateTime DateSubmitted { get; set; } = DateTime.Now;

        public int BookId { get; set; }
        [JsonIgnore]
        public Book Book { get; set; }
    }
}