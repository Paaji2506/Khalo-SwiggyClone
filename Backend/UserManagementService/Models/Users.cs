namespace UserManagementService.Models
{
    public class Users
    {
        public Guid Id { get; set; }

        public long Phoneno { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }
        public string Username { get; set; }

        public string Location { get; set; }

        public bool IsAdmin { get; set; }
    }
}
