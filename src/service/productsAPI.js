import axios from "axios"

const productsAPI = async () =>{
    const products = await axios.get("https://mocki.io/v1/ab02755a-7db7-4939-bc0d-1e2d7c3a7870")

    return products;
}

export { productsAPI }