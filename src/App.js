import "./App.css";
import { useContext, useEffect } from "react";
import { allProductContext } from "./context/allProductContext";
import "swiper/css/bundle";
import { Route, Routes } from "react-router-dom";
import agent from "./api/agent";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import { Details, RouterSharp } from "@mui/icons-material";
import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./pages/CatalogPage/Catalog";
import Detail from './pages/DetailPage/Detail'
import Yoxla from "./components/Product";

function App() {
  let { product, setProduct, setCategories } = useContext(allProductContext);

  useEffect(() => {
    agent
      .getAll()
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },[product]);

  useEffect(() => {
    agent
      .getByCategory()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
      });
  });
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<Detail/>}/>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
