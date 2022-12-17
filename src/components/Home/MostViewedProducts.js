import React, {useEffect, useState, useContext} from "react"

// --- swiper js
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// ---- css
import "./shared/Products.css";

// --- components
import Product from "./shared/Product"

// --- functions
// window size
import { getWindowSize } from "../../helper/functions"

// --- contexts
import { ProductsContexts } from "../../contexts/ProductsContextsProvider"

const MostViewedProducts = () => {

    // get window size when screen resize for slider in mobile screens
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);
    }, []);

    let productPerView;

    if(windowSize.innerWidth < 640){
        productPerView = 2.15
    }else if (windowSize.innerWidth >= 640 && windowSize.innerWidth <= 1024) {
        productPerView = 3.15
    } else {
        productPerView = 4.15
    }

    // get products from server
    const products = useContext(ProductsContexts)
    const { data } = products
console.log(data)
    return (
        <div className="products lg:max-w-[1118px] xl:max-w-[1245px] 2xl:max-w-[1415px] mx-auto">
            <Swiper className="mySwiper" slidesPerView={productPerView}  navigation={true} modules={[Navigation]}>
                {data && data.map(product => (
                    product.category === "mostViewed" &&
                    <SwiperSlide className="p-1" key={product.id}>
                        <Product data={product} /> 
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default MostViewedProducts;