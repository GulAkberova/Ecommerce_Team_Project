import './App.css';
import { useContext, useEffect } from 'react';
import { allProductContext } from './context/allProductConetxt';
import { instance } from './api/agent';
import Information from './layouts/header/Information/Information';
import Search from './layouts/header/Search/Search';
import Navbar from './layouts/header/Navbar/Navbar';
import HeroCart from './components/HeroCart';
import Footer from './layouts/footer/Footer';




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
    <Information/>
    <Search/>
    <Navbar/>
    <HeroCart/>
    <Footer/>
    </>
  );
}

export default App;
