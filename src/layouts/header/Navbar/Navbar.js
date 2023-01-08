import React from 'react'
import '../../../UI/navbar.css'
import BrowseCategories from '../Navbar/BrowseCategories'
import vector from '../../../assets/icon/header/Vector.svg'

function Navbar() {
  return (
    <div className='navbarBox'>
      <div className='navbarBoxLeft'>
      <BrowseCategories/>
      <div className='navbarCategories'>
        <ul>
          <li>Home</li>
          <img src={vector}/>
          <li>Catalog</li>
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