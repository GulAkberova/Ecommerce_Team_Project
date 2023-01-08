import { Filter } from '@mui/icons-material'
import React from 'react'
import catalog from '../../UI/catalog.module.css'
function Catalog() {
  return (
    <>
    <div className={catalog.container}>
      <div className={catalog.bigdiv}>
        <Filter/>

      </div>

    </div>
    
    </>
  )
}

export default Catalog