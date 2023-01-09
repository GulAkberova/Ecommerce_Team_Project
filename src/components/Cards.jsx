import React from "react";
import { useContext, useState } from "react";
import { allProductContext } from "../context/allProductContext";
import CardCss from "../UI/Cards.module.css"
import ReactStars from "react-rating-stars-component";


export default function Cards() {
  let {product,selectedCategories} = useContext(allProductContext);

  const [style, setStyle] = useState("");
 
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
  
      <a className={CardCss.itemContainer} >
        {product.map((item) =>  item.category === selectedCategories && (
          <div style={{cursor:"pointer"}} className={CardCss.cardContainer} onMouseEnter={() => {
            setStyle(item);
          }} onMouseLeave={()=>setStyle("false")}>
            <img className={CardCss.cardImage } src={item.image} />
            <h1 className={CardCss.cardTitle} style={{
              display: style === item ? "none" : "",
            }}>{item.title}</h1>
            <h1 className={CardCss.cardPrice} style={{
              display: style === item ? "none" : "",
            }}>{item.price} </h1>
            <div style={{
              display: style === item ? "none" : "",
            }}>
            <ReactStars  
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
       /> 
            </div>

            <button className={CardCss.ButtonCss} style={{
              display: style === item ? "flex" : "none",
              cursor:"pointer"
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </a>

    
  );
}
