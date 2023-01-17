import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { allProductContext } from "../context/allProductContext";
import products from "../UI/products.module.css"
import ReactStars from "react-rating-stars-component";


function Product() {
    let {product,selectedCategories,favorite,setFavorite} = useContext(allProductContext);

    const [style, setStyle] = useState("");
   
    const ratingChanged = (newRating) => {
      // console.log(newRating);
    };
 
    const handleFavorite = (index) => {
      setFavorite(() => {
        if (favorite.includes(index)) {
          return favorite.find((q) => q.id !== index.id);
        } else {
          return [...favorite, index];
        }
      });
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
                <button className={products.favorite}onClick={()=>handleFavorite(item)}><i className={ favorite.includes(item)
                                ? "fa-solid fa-heart"
                                : "fa-regular fa-heart"}></i></button>
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