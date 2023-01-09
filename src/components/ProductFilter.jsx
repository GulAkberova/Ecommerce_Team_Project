import React from 'react'
import products from "../UI/products.module.css"

function ProductFilter() {
  return (
    <>
    <div className={products.container}>
        <div className={products.filterBigDiv}>
            <h3>Popular products</h3>
            <div className={products.filterBtns}>
                <button>Cameras</button>
                <button>Cameras</button>
                <button>Cameras</button>
                <button>Cameras</button>
            </div>

        </div>

    </div>
    </>
  )
}

export default ProductFilter