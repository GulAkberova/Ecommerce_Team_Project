import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { allProductContext } from "../context/allProductContext";
import products from "../UI/products.module.css"
import ReactStars from "react-rating-stars-component";


function Product() {
    let {product,selectedCategories} = useContext(allProductContext);

    const [style, setStyle] = useState("");
   
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
   useEffect(()=>{
    console.log(product)
   },[product])
  
  return (
    <>

      <div className={products.container}>
        <div className={products.bigdiv}>
           {
            product && product.map((item,key)=>(
                <div key={item.id} className={products.minidiv}>
               <div className={products.miniDivImgBig}>
               <div className={products.miniDivImg}>
                    <Link to={`product/${item.id}`}><img src={item.image}/></Link>
                </div>
                <button>Ur</button>
               </div>

                <div className={products.miniDivText}>
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                    <ReactStars  
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
       /> 

                </div>
                <div className={products.miniDivHover}>
                    <button className={products.miniDivBtn1}>Add to Cart</button>
                    <button className={products.miniDivBtn2}>G</button>

                </div>
                    

            </div>
            ))
           }

        </div>

      </div>

    </>
  )
}

export default Product