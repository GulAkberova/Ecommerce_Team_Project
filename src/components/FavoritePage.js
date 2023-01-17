import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { allProductContext } from "../context/allProductContext";
import products from "../UI/products.module.css"
import ReactStars from "react-rating-stars-component";

function FavoritePage() {
  let { favorite, setFavorite } = useContext(allProductContext)
 
  const [style, setStyle] = useState("");
   
  const ratingChanged = (newRating) => {
   
  };
  const handleWishDelete = (item) => {
    let newFavorite = favorite.filter((q) => q.id !== item);
    setFavorite(newFavorite);
     
  };

  return (
    <div>
      <button onClick={()=>(setFavorite([]))} className={products.clear}>Clear</button>
        <div className={products.container}>
        <div className={products.bigdiv}>
          
           {
            favorite.length ?  favorite.map((item,key)=> 
          
            (
                <div key={item.id} className={products.minidiv}>
               <div className={products.miniDivImgBig}>
               <div className={products.miniDivImg}>
                    <Link to={`product/${item.id}`}><img src={item.image}/></Link>
                </div>
                <button className={products.favorite} onClick={() => handleWishDelete(item.id)}><i class="fa-solid fa-heart"></i></button>
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
            )) : <h1>Data not found...</h1>
           }

        </div>

      </div>
    </div>
  )
}

export default FavoritePage

