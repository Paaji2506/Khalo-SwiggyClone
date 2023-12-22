using UserServicemanagement.Data;
using UserServicemanagement.Models;

namespace UserServicemanagement.Repositories
{
    public class UserRepository
    {
        private readonly UserDbContext dbContext;

        public UserRepository(UserDbContext dbContext)
        {
            this.dbContext = dbContext;

        }

        public Users AddUser(Users user)
        {
            dbContext.User.Add(user);
            dbContext.SaveChanges();
            return user;

        }

        public List<Users> GetAllUsers()
        {
            var users = dbContext.User.ToList();
            return users;
        }

        public Users GetUserByEmail(string email)
        {
            var users = dbContext.User.ToList();

            // You can simplify this logic using LINQ
            var user = users.FirstOrDefault(u => u.Email == email);
            return user;
        }

        public string RemoveUser(Guid Id)
        {
            var user = dbContext.User.Find(Id);

            if (user == null)
            {
                return "User Not Found";
            }
            else
            {
                dbContext.User.Remove(user);
                dbContext.SaveChanges();

                return "Deleted Successfully ";
            }

        }
    }
}
