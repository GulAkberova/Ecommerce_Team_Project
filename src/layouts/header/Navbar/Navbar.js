import React, { useContext } from 'react'
import '../../../UI/navbar.css'
import BrowseCategories from '../Navbar/BrowseCategories'
import vector from '../../../assets/icon/header/Vector.svg'
import { NavLink } from 'react-router-dom'
import { allProductContext } from '../../../context/allProductContext'

function Navbar() {
  let { favorite, setFavorite } = useContext(allProductContext)

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
          <li>Pages &nbsp;
          <img src={vector}/>
          </li>
          <li><NavLink to={"/favorite"}>Favorite{favorite.length}</NavLink></li>
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