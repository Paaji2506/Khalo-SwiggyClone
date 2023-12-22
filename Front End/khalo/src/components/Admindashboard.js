import React from 'react'
import Adminnav from './Adminnav'

export default function Admindashboard() {
  return (
    <div>
      <Adminnav/>

      <div className="adminhome">
            <h2>Hello Admin</h2>

            <h4>Add New Restaurant</h4>  <a class="btn btn primary" href="/addrestaurants">Add</a>
           
      </div>
    </div>
  )
}
