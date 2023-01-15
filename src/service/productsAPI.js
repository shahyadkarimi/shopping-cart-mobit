import axios from "axios"

const productsAPI = async () =>{
    const products = await axios.get("https://mocki.io/v1/3b28202b-ffdb-45fb-9492-908a1eb39d89")

    return products;
}

export { productsAPI }