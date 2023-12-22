import React from 'react'
import Carouselhome from './Carouselhome'
import Membershipmenu from './Membershipmenu'
import Allrestaurants from './Allrestaurants'
import Navbar from './Navbar'


export default function Home() {
  return (
    <div>
           <Navbar/>
          <Carouselhome/>
          <Membershipmenu/>
    </div>
  )
}
