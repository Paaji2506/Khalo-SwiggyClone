import React from 'react'
import Adminnav from './Adminnav'

export default function Allrestaurants() {
  return (
    <div>
      <Adminnav/>
      <div className="restTables">
      <table class="table">
        <thead class="table-dark">
          <tr> 
             <td>Sr No.</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Rating</td>
            <td>Image</td>
            <td>Keywords</td>
            <td>Edit </td>
            <td>Delete </td>
          </tr>
        </thead>
       <tbody>
           <td></td>
        </tbody>
     </table>
     </div>
      
    </div>
  )
}
