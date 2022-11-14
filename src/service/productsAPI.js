import axios from "axios"

const productsAPI = async () =>{
    const products = await axios.get("https://leverapi.f4rd1n.ir/api/digikala")

    return products;
}

export {productsAPI}