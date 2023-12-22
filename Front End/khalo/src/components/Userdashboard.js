import React, { useEffect } from 'react'
import Usernav from './Usernav'
import Restaurent from './Restaurent'
import image from '../images/burger.jpeg'

export default function Userdashboard() {



  
  useEffect(() => {
    // This code will run after the component is initially rendered and every update
    LoadLocation();

  }, []);

  async function LoadLocation(){
    const location = prompt("Enter Location");
    let users = localStorage.getItem("loginuser") ? JSON.parse(localStorage.getItem("loginuser")) : [];

    localStorage.setItem("userloc",location);

    let resp = await fetch(`https://localhost:32768/api/User/${users.id}`,{
      method:'GET'
    });

    if(resp.status===200){

      
    let users = {
      phoneno: resp.phoneno,
      email: resp.useremail,
      password: resp.userpassword,
      username: resp.username,
      location: location,
      isAdmin: resp.isAdmin,
     
    };

     await fetch('https://localhost:32768/api/User', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(users),
    });

 

    }
   
  }
  return (
    <div>
      <Usernav/>
      <div className="userdash">
      <Restaurent respic={image} resname="Hotel Empire" />
      <Restaurent respic={image} resname="Chung Wah" />
      <Restaurent respic={image} resname="Chowman" />
      <Restaurent respic={image} resname="Chowman" />
      </div>
    </div>
  )
}
