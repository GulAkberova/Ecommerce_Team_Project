<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> Zeyneb
import './App.css';
import { useContext, useEffect } from 'react';
import { allProductContext } from './context/allProductConetxt';
import { instance } from './api/agent';
<<<<<<< HEAD
import { Router, Routes } from 'react-router-dom';
=======
import Information from './layouts/header/Information/Information';
import Search from './layouts/header/Search/Search';
import Navbar from './layouts/header/Navbar/Navbar';
import HeroCart from './components/HeroCart';
import Footer from './layouts/footer/Footer';



=======
import "./App.css";
import { useContext, useEffect } from "react";
import { allProductContext } from "./context/allProductContext";

import { Router, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import MiniBanner from "./components/MiniBanner";
import PersonCarusel from "./components/PersonCarusel";
import Spacingtech from "./components/Spacingtech";
import Latest from "./components/Latest";
import LimitCarusel from "./components/LimitCarusel";
import agent from "./api/agent";
>>>>>>> ab043d8d7c40f5f70570dfe42f3787934e8c19bb
>>>>>>> Zeyneb

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
<<<<<<< HEAD
    
    <Routes>
      <Router>

      </Router>
    </Routes>
    
=======
<<<<<<< HEAD
    <Information/>
    <Search/>
    <Navbar/>
    <HeroCart/>
    <Footer/>
=======
      <Banner />
      <LimitCarusel/>
      <MiniBanner/>
      <PersonCarusel/>
      <Spacingtech/>
      <Latest/>
>>>>>>> ab043d8d7c40f5f70570dfe42f3787934e8c19bb
>>>>>>> Zeyneb
    </>
  );
}

export default App;
