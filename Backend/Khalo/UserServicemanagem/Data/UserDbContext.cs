using Microsoft.EntityFrameworkCore;
using UserServicemanagement.Models;

namespace UserServicemanagement.Data
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        {

        }
        public DbSet<Users> User { get; set; }
    }
}
