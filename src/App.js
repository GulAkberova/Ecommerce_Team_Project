import "./App.css";
import { useContext, useEffect } from "react";
import { allProductContext } from "./context/allProductContext";
import { instance } from "./api/agent";
import { Router, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import MiniBanner from "./components/MiniBanner";
import PersonCarusel from "./components/PersonCarusel";
import Spacingtech from "./components/Spacingtech";
import Latest from "./components/Latest";
import LimitCarusel from "./components/LimitCarusel";

function App() {
  let { product, setProduct } = useContext(allProductContext);

  useEffect(() => {
    instance
      .get("/")
      .then((res) => {
        console.log(res.data);
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
