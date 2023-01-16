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
          <li><NavLink to={"/"}>Home &nbsp;
          <img src={vector}/></NavLink></li>
          <li><NavLink to={"/catalog"}>Catalog &nbsp;
          <img src={vector}/>
          </NavLink></li>
          <li>Blog</li>
          <li>Pages &nbsp;
          <img src={vector}/>
          </li>
          <li><NavLink to={"/favorite"}>Favorite</NavLink></li>
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