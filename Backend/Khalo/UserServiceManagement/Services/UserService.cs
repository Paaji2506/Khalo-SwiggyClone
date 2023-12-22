using UserServicemanagement.Models;
using UserServicemanagement.Repositories;

namespace UserServicemanagement.Services
{
    public class UserService
    {
        private readonly UserRepository userRepository;

        public UserService(UserRepository userRepository)
        {
            this.userRepository = userRepository;

        }

        public Users AddUser(Users user)
        {
            userRepository.AddUser(user);
            return user;
        }

        public List<Users> GetAllUsers()
        {
            var users = userRepository.GetAllUsers();
            return users;
        }

        public Users GetUserByEmail(string email)
        {
            Users user = userRepository.GetUserByEmail(email);
            return user;
        }

        public string RemoveUser(Guid Id)
        {
            String message = userRepository.RemoveUser(Id);
            return message;
        }
    }
}
