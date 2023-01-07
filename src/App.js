import './App.css';
import { useContext, useEffect } from 'react';
import { allProductContext } from './context/allProductConetxt';
import { instance } from './api/agent';
import { Router, Routes } from 'react-router-dom';

function App() {
  let {product, setProduct}=useContext(allProductContext)
  
  useEffect(() => {
    instance
      .get("/")
      .then((res) =>{
        console.log(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
    
  });
  return (
    <>
    
    <Routes>
      <Router>

      </Router>
    </Routes>
    
    </>
  );
}

export default App;
