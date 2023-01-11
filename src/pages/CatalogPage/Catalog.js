import React from 'react'
import FilterBigCard from '../../components/FilterBigCard'
import FilterCard from '../../components/FilterCard'
import Product from '../../components/Product'
import catalog from '../../UI/catalog.module.css'
function Catalog() {
  return (
    <>
    <div className={catalog.container}>
      <div className={catalog.bigdiv}>
        <FilterCard/>
        {/* <FilterBigCard/> */}
        <Product/>

      </div>

    </div>
    
    </>
  )
}

export default Catalog