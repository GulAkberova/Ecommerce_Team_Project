import "./App.css";
import { useContext, useEffect } from "react";
import { allProductContext } from "./context/allProductContext";
import "swiper/css/bundle";
import { Route, Routes } from "react-router-dom";
import agent from "./api/agent";
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer'
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

    </Routes>
    <Footer/>
  
    </>
  );
}

export default App;
