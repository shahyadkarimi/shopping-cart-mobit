import axios from "axios"

const productsAPI = async () =>{
    const products = await axios.get("http://localhost:3000/data")

    return products;
}

export {productsAPI}