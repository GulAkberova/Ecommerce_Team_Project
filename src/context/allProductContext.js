import { createContext, useState } from "react";

export const allProductContext = createContext(null);

export const AllProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const values = {
    product,
    setProduct,
    categories,
    setCategories,
  };
  return (
    <allProductContext.Provider value={values}>
      {children}
    </allProductContext.Provider>
  );
};
