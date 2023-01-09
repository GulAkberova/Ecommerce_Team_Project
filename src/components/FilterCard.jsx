import React from 'react'
import catalog from '../UI/catalog.module.css'

function FilterCard() {
  return (
    <>
    <div className={catalog.filterBigDiv}>
      <div className={catalog.filterHeadDiv}>
        <h3>Categories</h3>
        <p>Reset</p>

      </div>
      <div className={catalog.filterMiniDiv}>
        <div>
          <label>
          <input type='checkbox' />
          All categories
          </label>
          <p>10</p>
        </div>
        <div>
          <label>
          <input type='checkbox' />
          Tablet
          </label>
          <p>10</p>
        </div>
        <div>
          <label>
          <input type='checkbox' />
          Laptop
          </label>
          <p>10</p>
        </div>
        <div>
          <label>
          <input type='checkbox' />
          Console
          </label>
          <p>10</p>
        </div>
        <div>
          <label>
          <input type='checkbox' />
          Headphones
          </label>
          <p>10</p>
        </div>

      </div>


    </div>

    
    </>
  )
}

export default FilterCard