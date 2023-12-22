import React from 'react'

export default function Signin() {
  return (
    <div>
              
  <form>
  <div class="mb-3">
    <input type="number" class="form-control" id="exampleInputEmail1" placeholder="Phone Number" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <input type="email" class="form-control" id="exampleInputEmail1"placeholder="Email" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <input type="text" class="form-control" id="exampleInputEmail1"placeholder="Name" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" placeholder="Password" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" className="check"/>
    <label class="form-check-label" for="exampleCheck1"> I accept the Terms & Conditions & Privacy Policy</label>
  </div>
  <button type="submit" class="btn btn-primary">Sign Up</button>
</form>
    </div>
  )
}
