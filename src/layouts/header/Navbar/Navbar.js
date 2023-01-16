import React from 'react'
import '../../../UI/navbar.css'
import BrowseCategories from '../Navbar/BrowseCategories'
import vector from '../../../assets/icon/header/Vector.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbarBox'>
      <div className='navbarBoxLeft'>
      <BrowseCategories/>
      <div className='navbarCategories'>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <img src={vector}/>
          <li><NavLink to={"/product"}>Catalog</NavLink></li>
          <img src={vector}/>
          <li>Blog</li>
          <li>Pages</li>
          <img src={vector}/>
          <li>About us</li>
        </ul>
      </div>
      </div>
      <div className='navbarBoxRight'>
      <p><b>30 Days Free Return</b></p>
      </div>
    </div>
  )
}

export default Navbar