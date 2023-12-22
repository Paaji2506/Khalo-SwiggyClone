using Microsoft.EntityFrameworkCore;
using UserManagementService.Models;

namespace UserManagementService.Data
{
        public class UserDbContext : DbContext
        {
            public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
            {

            }
            public DbSet<Users> User { get; set; }
        }
    }
