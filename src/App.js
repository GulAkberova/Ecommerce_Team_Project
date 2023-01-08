import './App.css';
import { useContext, useEffect } from 'react';
import { allProductContext } from './context/allProductContext';
import { instance } from './api/agent';
import { Route, Routes } from 'react-router-dom';
import Footer from './layouts/footer/Footer';
import agent from "./api/agent";
import Header from './layouts/header/Header';
import { RouterSharp } from '@mui/icons-material';
import HomePage from './pages/HomePage/HomePage';
import Catalog from './pages/CatalogPage/Catalog';

  function App() {
    let { setProduct, setCategories } = useContext(allProductContext);
  
    useEffect(() => {
      agent
        .getAll()
        .then((res) => {
          setProduct(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  
    useEffect(() => {
      agent
        .getByCategory()
        .then((res) => {
          setCategories(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  return (
    <>
   
    <Header/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/catalog' element={<Catalog/>}/>

      {/* <Route path='/product' element={<Product/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/> */}
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
