import React from 'react'
import FilterBigCard from '../../components/FilterBigCard'
import FilterCard from '../../components/FilterCard'
import catalog from '../../UI/catalog.module.css'
function Catalog() {
  return (
    <>
    <div className={catalog.container}>
      <div className={catalog.bigdiv}>
        <FilterCard/>
        <FilterBigCard/>

      </div>

    </div>
    
    </>
  )
}

export default Catalog