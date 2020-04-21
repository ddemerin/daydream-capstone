using System.Text.Json.Serialization;

namespace daydream_capstone.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        [JsonIgnore]
        public string HashedPassword { get; set; }
    }

}