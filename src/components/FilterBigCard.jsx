import React, { useEffect } from 'react'
import catalog from '../UI/catalog.module.css'
import { Link } from "react-router-dom";
import products from "../UI/products.module.css"
import { useContext, useState } from "react";
import { allProductContext } from "../context/allProductContext";
import ReactStars from "react-rating-stars-component";




function FilterBigCard() {
  let { product, selectedCategories, favorite, setFavorite } = useContext(allProductContext);

  const [filteredProducts, setFilteredProducts] = useState([]);

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
  // console.log(favorite);
  useEffect(() => {
    console.log(favorite);
  }, [favorite])

  useEffect(() => {
    setFilteredProducts(product.filter(q => selectedCategories.includes(q.category)))
  }, [selectedCategories])

  return (
    <>
      <div className={catalog.cardBigDiv}>
        {
          selectedCategories.length
            ?
            filteredProducts.map((item, key) =>
            (
              <div key={item.id} className={products.minidivFilter}>
                <div className={products.miniDivImgBig}>
                  <div className={products.miniDivImg}>
                    <Link to={`/product/${item.id}`}><img src={item.image} /></Link>
                  </div>
                  <button className={products.favorite} onClick={() => handleFavorite(item)}><i className={
                    favorite.includes(item)
                      ? "fa-solid fa-heart"
                      : "fa-regular fa-heart"
                  }></i></button>
                  <button className={products.basket}><i class="fa-solid fa-basket-shopping"></i></button>

                </div>

                <div className={products.miniDivText}>
                  <h5>{item.title.slice(0, 50)}...</h5>
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
            :
            product && product.map((item, key) =>
            (
              <div key={item.id} className={products.minidivFilter}>
                <div className={products.miniDivImgBig}>
                  <div className={products.miniDivImg}>
                    <Link to={`/product/${item.id}`}><img src={item.image} /></Link>
                  </div>
                  <button className={products.favorite} onClick={() => handleFavorite(item)}><i className={
                    favorite.includes(item)
                      ? "fa-solid fa-heart"
                      : "fa-regular fa-heart"
                  }></i></button>
                  <button className={products.basket}><i class="fa-solid fa-basket-shopping"></i></button>

                </div>

                <div className={products.miniDivText}>
                  <h5>{item.title.slice(0, 50)}...</h5>
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

    </>
  )
}

export default FilterBigCard