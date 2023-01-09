import React, { useContext, useEffect, useState } from 'react'
import detail from '../UI/detail.module.css'
import img1 from '../assets/image/11 1.png'
import { useParams } from 'react-router'
import agent from '../api/agent'
import { allProductContext } from '../context/allProductContext'

function DetailCard() {
    const param = useParams()
    let {productData,setProductData} =useContext(allProductContext)
    useEffect(()=>{
        agent.getById(param.id)
        .then((res)=>setProductData(res))
       

    },[productData])
  return (
    <>
    <div className={detail.container}>
        <div className={detail.bigdiv}>
            <div className={detail.miniDivImg}>
                <div className={detail.miniDivImgBig}>
                    <div className={detail.miniDivImgBig1}>
                    <img src={productData.image}/>
                    </div>

                </div>
                <div className={detail.miniDivImgMini}>
                    <div className={detail.miniDivImgMini1}>
                        <img src={productData.image}/>

                    </div>
                    <div className={detail.miniDivImgMini1}>
                        <img src={productData.image}/>

                    </div>

                </div>

            </div>
            <div className={detail.detailText}>
                <h2>{productData.title}</h2>
                <h4>${productData.price}</h4>
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