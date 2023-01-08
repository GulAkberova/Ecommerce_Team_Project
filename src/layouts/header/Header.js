import React from 'react'
import Information from './Information/Information';
import Search from './Search/Search';
import Navbar from './Navbar/Navbar';
function Header() {
  return (
    <div>
    <Information/>
    <Search/>
    <Navbar/>
    </div>
  )
}

export default Header