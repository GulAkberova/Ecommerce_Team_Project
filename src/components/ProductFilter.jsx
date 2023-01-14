import React, { useContext, useEffect } from "react";
import agent from "../api/agent";
import { allProductContext } from "../context/allProductContext";
import products from "../UI/products.module.css";

function ProductFilter() {
  let { categories, selectedCategories, setSelectedCategories, setCategories } =
    useContext(allProductContext);

  useEffect(() => {
    agent.getByCategories().then((res) => setCategories(res));
  }, []);

  return (
    <>
      <div className={products.container}>
        <div className={products.filterBigDiv}>
          <h3>Popular products</h3>
          <div className={products.filterBtns}>
            <ul>
              {categories &&
                categories.map((item, key) => (
                  <li onClick={()=>setSelectedCategories(item)}>{item}</li>
               
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductFilter;
