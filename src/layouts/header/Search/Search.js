import React from 'react'
import '../../../UI/search.css'
import user from '../../../assets/icon/header/user.svg'
import heart from '../../../assets/icon/header/heart.svg'
import cart from '../../../assets/icon/header/shopping-cart.svg'
import logo from '../../../assets/logo/logo 1.svg'

function Search() {
  return (
    <div className='searchBox'>
        <div className='searchBoxLeft'>
        <img src={logo}/>   
        <form class="searchInput">
        <input type="text" className="searchInput" placeholder="Search any thing"/>
        <button type="submit">Search</button>
        </form>
        </div>
        <div className='searchBoxRight'>
           <img src={user}/>
            <p>Sing in</p>
            <img src={heart}/>
            <p>Sing in</p>
            <img src={cart}/>
            <p>Cart</p>
        </div>
    </div>
  )
}

export default Search