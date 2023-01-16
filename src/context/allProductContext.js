import { createContext, useState } from "react";

export const allProductContext = createContext(null);

export const AllProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productData,setProductData]=useState([])
  const [favorite, setFavorite] = useState([]);
  
  const [selectedCategories, setSelectedCategories] = useState("electronics");
  const values = {
    product,
    setProduct,
    categories,
    setCategories,
    selectedCategories,
    setSelectedCategories,
    productData,
    setProductData,
    favorite,
    setFavorite,
  };
  return (
    <allProductContext.Provider value={values}>
      {children}
    </allProductContext.Provider>
  );
};
