import React, {useEffect, useState} from "react"

// --- swiper js
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// ---- css
import "./SpecialOffer.css";

// --- components
import SpecialOfferProduct from "./SpercialOfferProduct"

// --- functions
// window size
import { getWindowSize } from "../../../helper/functions"


const SpecialOffer = () => {

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
        productPerView = 2
    }else if (windowSize.innerWidth >= 640 && windowSize.innerWidth <= 1024) {
        productPerView = 3
    } else {
        productPerView = 4
    }

    return (
        <div className="specialOffer lg:max-w-[1118px] xl:max-w-[1245px] 2xl:max-w-[1415px] mx-auto mb-36">
            <Swiper className="mySwiper" slidesPerView={productPerView}  navigation={true} modules={[Navigation]}>
                <SwiperSlide className="p-1"> <SpecialOfferProduct /> </SwiperSlide>
                <SwiperSlide className="p-1"> <SpecialOfferProduct /> </SwiperSlide>
                <SwiperSlide className="p-1"> <SpecialOfferProduct /> </SwiperSlide>
                <SwiperSlide className="p-1"> <SpecialOfferProduct /> </SwiperSlide>
                <SwiperSlide className="p-1"> <SpecialOfferProduct /> </SwiperSlide>
                <SwiperSlide className="p-1"> <SpecialOfferProduct /> </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SpecialOffer;