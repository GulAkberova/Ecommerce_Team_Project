import React from 'react'
import '../../../UI/information.css'
import location from '../../../assets/icon/header/location.svg'
import group from '../../../assets/icon/header/group.svg'

function Information() {
  return (
    <div className='infoBox'>
      <div className='infoBoxLeft'>
      <p>Need help ?</p>
      <p>Call Us: (+98)0234 456 879</p>
     </div>
     <div className='infoBoxRight'>
      <img src={location}/>
      <p>Our store</p>
      <img src={group}/>
      <p>Track your order</p>
      </div>
    </div>
  )
}

export default Information