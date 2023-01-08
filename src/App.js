import "./App.css";
import { useContext, useEffect } from "react";
import { allProductContext } from "./context/allProductContext";
import "swiper/css/bundle";
import { Router, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import MiniBanner from "./components/MiniBanner";
import PersonCarusel from "./components/PersonCarusel";
import Spacingtech from "./components/Spacingtech";
import Latest from "./components/Latest";
import LimitCarusel from "./components/LimitCarusel";
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
      <Banner />
      <LimitCarusel/>
      <MiniBanner/>
      <PersonCarusel/>
      <Spacingtech/>
      <Latest/>
    </>
  );
}

export default App;
