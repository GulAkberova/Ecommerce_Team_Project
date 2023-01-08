import React from 'react'
import detail from '../UI/detail.module.css'
import img1 from '../assets/image/11 1.png'

function DetailCard() {
  return (
    <>
    <div className={detail.container}>
        <div className={detail.bigdiv}>
            <div className={detail.miniDivImg}>
                <div className={detail.miniDivImgBig}>
                    <img src={img1}/>

                </div>
                <div className={detail.miniDivImgMini}>
                    <div className={detail.miniDivImgMini1}>
                        <img src={img1}/>

                    </div>
                    <div className={detail.miniDivImgMini1}>
                        <img src={img1}/>

                    </div>

                </div>

            </div>
            <div className={detail.detailText}>
                <h2>Play game</h2>
                <h4>$11,70</h4>
                <p>Availability: <span>In stock</span></p>
                <p className={detail.detailSpan}>Hurry up! only 34 product left in stock!</p>
                <hr/>
                <div className={detail.detailQuantity}>
                    <h5>Quantity :</h5>
                    <div>
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                    </div>
                </div>
                <div className={detail.detailBtns}>
                    <button>Add to cart</button>
                    <button>Buy it now</button>
                  
                </div>
                <hr/>
                <h5>Sku:<span>01133-9-9</span></h5>
                <h5>Category:<span>01133-9-9</span></h5>
                <h5>Share:<span>01133-9-9</span></h5>

            </div>

        </div>

    </div>
    </>
  )
}

export default DetailCard