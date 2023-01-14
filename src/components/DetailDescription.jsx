import React, { useRef } from 'react'
import detail from '../UI/detail.module.css'

function DetailDescription() {
  const desRef=useRef()
  const handleDescriptions=()=>{

  }
  return (
    <>
    <div className={detail.container}>
      <div className={detail.descriptionBigDiv}>
        <div className={detail.descriptionBtns}>
          <button  onClick={()=>handleDescriptions()} >Description</button>
          <button className={detail.btn1}>Reviews</button>

        </div>
        <div className={detail.descriptionInfo}>
          <div>
          <h4>Customer reviews</h4>
          <p>No reviews yet</p>
          <button>Write a review</button>
          </div>
          <div className={detail.descriptionsNone}>
          <h4>Customer</h4>
          <button>Write a review</button>
          </div>

        </div>

      </div>

    </div>
    </>
  )
}

export default DetailDescription