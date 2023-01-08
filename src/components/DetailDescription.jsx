import React from 'react'
import detail from '../UI/detail.module.css'

function DetailDescription() {
  return (
    <>
    <div className={detail.container}>
      <div className={detail.descriptionBigDiv}>
        <div className={detail.descriptionBtns}>
          <button>Description</button>
          <button className={detail.btn1}>Reviews</button>

        </div>
        <div className={detail.descriptionInfo}>
          <h4>Customer reviews</h4>
          <p>No reviews yet</p>
          <button>Write a review</button>

        </div>

      </div>

    </div>
    </>
  )
}

export default DetailDescription