import React, { useEffect, useState, createContext} from "react"

// --- Api
import { productsAPI } from "../service/productsAPI"

export const ProductsContexts = createContext()

const ProductsContextsProvider = ({children}) => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        const fetchAPI = async () => {
            setProducts( await productsAPI())
        }

        fetchAPI()
        
    }, [])

    return(
        <ProductsContexts.Provider value={products}>
            {children}
        </ProductsContexts.Provider>
    )
}

export default ProductsContextsProvider;