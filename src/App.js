import './App.css';
import { useContext, useEffect } from 'react';
import { allProductContext } from './context/allProductContext';
import { Router, Routes } from 'react-router-dom';
import Footer from './layouts/footer/Footer';
import agent from "./api/agent";


function App() {
  let { product, setProduct } = useContext(allProductContext);

  useEffect(() => {
    
      agent.getAll()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>

    
    <Routes>
      <Router>

      </Router>
    </Routes>
  
    
    <Footer/>

     

    </>
  );
}

export default App;
