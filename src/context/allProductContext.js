import { createContext, useState } from "react";

export const allProductContext=createContext(null)

export const AllProductProvider=({children})=>{
    const [product, setProduct]=useState([])

    const values={
        product,
        setProduct
    }
    return <allProductContext.Provider value={values}>
{children}
    </allProductContext.Provider>
}
