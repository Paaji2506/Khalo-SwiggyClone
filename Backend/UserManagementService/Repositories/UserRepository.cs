using UserManagementService.Data;
using UserManagementService.Models;

namespace UserManagementService.Repositories
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

        public Users GetUserById(Guid userid)
        {
           // var users = dbContext.User.ToList();

            // You can simplify this logic using LINQ
            var user = dbContext.User.FirstOrDefault(u => u.Id==userid);
            return user;
        }


        public Users GetUserByEmail(string email)
        {
            var users = dbContext.User.ToList();

            // You can simplify this logic using LINQ
            var user = users.FirstOrDefault(u => u.Email == email);
            return user;
        }

        public Users UpdateUser(Users user)
        {
            var upuser = dbContext.User.FirstOrDefault(u=>u.Id==user.Id);

            if (upuser != null)
            {
                upuser.Phoneno = user.Phoneno;
                upuser.Email = user.Email;
                upuser.Password = user.Password;
                upuser.Username = user.Username;
                upuser.Location = user.Location;
                upuser.IsAdmin = user.IsAdmin;
            }
            dbContext.SaveChanges();
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
