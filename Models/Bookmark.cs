using System.Text.Json.Serialization;

namespace daydream_capstone.Models
{
    public class Bookmark
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public Book Book { get; set; }
        public int UserId { get; set; }
        [JsonIgnore]
        public User User { get; set; }
    }

}