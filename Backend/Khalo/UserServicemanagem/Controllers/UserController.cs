using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserServicemanagement.Models;
using UserServicemanagement.Services;

namespace UserServicemanagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService userService;

        public UserController(UserService userService)
        {
            this.userService = userService;

        }

        [HttpPost]
        public IActionResult AddUser([FromBody] Users uservalues)
        {
            Users user = userService.AddUser(uservalues);
            return Ok(user);

        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var users = userService.GetAllUsers();
            return Ok(users);
        }

        [HttpGet]
        [Route("{uemail}")]
        public IActionResult GetUserByEmail([FromRoute] string uemail)
        {
            var user = userService.GetUserByEmail(uemail);


            if (user != null)
            {
                // Return a 200 OK response with the user
                return Ok(user);
            }
            else
            {
                // Return a 404 Not Found response
                return NotFound();
            }
        }


        [HttpDelete]
        [Route("{Id:Guid}")]
        public IActionResult RemoveUser([FromRoute] Guid Id)
        {
            string message = userService.RemoveUser(Id);
            return Ok(message);



        }
    }
}
