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
      // console.log(newRating);
    };
 
  
  return (
    <>

      <div className={products.container}>
        <div className={products.bigdiv}>
           {
            product && product.map((item,key)=> item.category === selectedCategories &&
          
            (
                <div key={item.id} className={products.minidiv}>
               <div className={products.miniDivImgBig}>
               <div className={products.miniDivImg}>
                    <Link to={`product/${item.id}`}><img src={item.image}/></Link>
                </div>
                <button className={products.favorite}><i class="fa-regular fa-heart"></i></button>
                <button className={products.basket}><i class="fa-solid fa-basket-shopping"></i></button>
               
               </div>

                <div className={products.miniDivText}>
                    <h5>{item.title.slice(0,50)}...</h5>
                    <p>${item.price}</p>
                    <ReactStars  
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
       /> 

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