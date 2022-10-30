import React from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

// --- images
import slide1 from "../../images/header-slider/slide-1.jpg"
import slide2 from "../../images/header-slider/slide-2.jpg"
import slide3 from "../../images/header-slider/slide-3.jpg"
import slide4 from "../../images/header-slider/slide-4.jpg"
import slide5 from "../../images/header-slider/slide-5.jpg"
import slide6 from "../../images/header-slider/slide-6.jpg"
import slide7 from "../../images/header-slider/slide-7.jpg"
import slide8 from "../../images/header-slider/slide-8.jpg"
import slideDesktop1 from "../../images/header-slider/slide-7-desktop.jpg"
import slideDesktop2 from "../../images/header-slider/slide-8-desktop.jpg"

const Header = () => {
    return (
        <div className="w-full flex justify-center gap-5 mt-5">
            <div className="desktopSlide-1">
                <img className="rounded-3xl h-[360px]" src={slideDesktop1} alt="desktopSlide" />
            </div>
            <div className="slider w-[930px] h-[360px]">
                <Swiper autoplay={{delay: 2500,disableOnInteraction: false,}} loop={true} navigation={true} pagination={{clickable: true,}} modules={[Autoplay, Navigation, Pagination]}  className="mySwiper rounded-3xl">
                    <SwiperSlide> <img src={slide1} alt="slide1" /> </SwiperSlide>
                    <SwiperSlide> <img src={slide2} alt="slide2" /> </SwiperSlide>
                    <SwiperSlide> <img src={slide3} alt="slide3" /> </SwiperSlide>
                    <SwiperSlide> <img src={slide4} alt="slide4" /> </SwiperSlide>
                    <SwiperSlide> <img src={slide5} alt="slide5" /> </SwiperSlide>
                    <SwiperSlide> <img src={slide6} alt="slide6" /> </SwiperSlide>
                </Swiper>
            </div>
            <div className="desktopSlide-2 ">
                <img className="rounded-3xl h-[360px]" src={slideDesktop2} alt="desktopSlide" />
            </div>
        </div>
    )
}

export default Header;