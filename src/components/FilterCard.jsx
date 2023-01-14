import React, { useContext, useEffect } from 'react'
import agent from '../api/agent';
import { allProductContext } from '../context/allProductContext';
import catalog from '../UI/catalog.module.css'

function FilterCard() {
  let { categories, selectedCategories, setSelectedCategories, setCategories } =
  useContext(allProductContext);

  useEffect(() => {
    agent.getByCategories().then((res) => setCategories(res));
  }, []);
  return (
    <>
    <div className={catalog.filter_divs}>
      <div>
        <h4>Categorires</h4>
        <p>Reset</p>
      </div>
      {categories &&
                categories.map((item, key) => (
                 
                  <div>
                  <label>
                  <input type={'checkbox'} onClick={()=>setSelectedCategories(item)}/>
                  {item} </label>
                  <p>6</p>
          
                </div>
               
                ))}
      <div>
        <h4>Avaliability</h4>
      
      </div>
      <div>
        <label>
        <input type={'checkbox'} />
        In stock
        </label>
        <p>4</p>

      </div>
      <div>
        <h4>Brand</h4>
      
      </div>
      <div>
        <label>
        <input type={'checkbox'} />
        
Smart watch
        </label>
        <p>4</p>

      </div>
      <div>
        <h4>Size</h4>
      
      </div>
      <div>
        <label>
        <input type={'checkbox'} />
        M
        </label>
        <p>4</p>

      </div>
      <div>
        <label>
        <input type={'checkbox'} />
        M
        </label>
        <p>4</p>

      </div>
      <div>
        <label>
        <input type={'checkbox'} />
        M
        </label>
        <p>4</p>

      </div>


    </div>

    
    </>
  )
}

export default FilterCard