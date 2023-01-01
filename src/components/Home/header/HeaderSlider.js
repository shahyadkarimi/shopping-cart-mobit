import React, {useEffect, useState} from "react"

// --- swiper js
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

// ---- css
import "./HeaderSlider.css";

// --- functions
// window size
import { getWindowSize } from "../../../helper/functions"

// --- images
import slide1 from "../../../images/header-slider/slide-1.jpg"
import slide2 from "../../../images/header-slider/slide-2.jpg"
import slide3 from "../../../images/header-slider/slide-3.jpg"
import slide4 from "../../../images/header-slider/slide-4.jpg"
import slide5 from "../../../images/header-slider/slide-5.jpg"
import slide6 from "../../../images/header-slider/slide-6.jpg"
import slide7 from "../../../images/header-slider/slide-7.jpg"
import slide8 from "../../../images/header-slider/slide-8.jpg"
import slideDesktop1 from "../../../images/header-slider/slide-7-desktop.jpg"
import slideDesktop2 from "../../../images/header-slider/slide-8-desktop.jpg"


const HeaderSlider = () => {

    // get window size when screen resize for slider in mobile screens
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);
  }, []);

    return (
        <div className="w-full flex justify-center mx-auto gap-5 mt-3 sm:mt-5 2xl:mt-5">
            <div className="desktopSlide-1 hidden lg:block">
                <img className="rounded-3xl h-[360px]" src={slideDesktop1} alt="desktopSlide" />
            </div>
            <div className="header-slider w-full h-[220px] sm:h-[320px] md:h-[340px] lg:w-[630px] lg:h-[360px] xl:w-[760px] 2xl:w-[930px]">
                <Swiper autoplay={{delay: 2500,disableOnInteraction: false,}} loop={true} navigation={true} pagination={{clickable: true,}} modules={[Autoplay, Navigation, Pagination]}  className="mySwiper rounded-3xl">
                    {windowSize.innerWidth < 1024 && <SwiperSlide> <img src={slide7} alt="slide7" /> </SwiperSlide>}
                    <SwiperSlide> <img src={slide1} alt="slide1" /> </SwiperSlide>
                    <SwiperSlide> <img src={slide2} alt="slide2" /> </SwiperSlide>
                    <SwiperSlide> <img src={slide3} alt="slide3" /> </SwiperSlide>
                    <SwiperSlide> <img src={slide4} alt="slide4" /> </SwiperSlide>
                    <SwiperSlide> <img src={slide5} alt="slide5" /> </SwiperSlide>
                    <SwiperSlide> <img src={slide6} alt="slide6" /> </SwiperSlide>
                    {windowSize.innerWidth < 1024 && <SwiperSlide> <img src={slide8} alt="slide8" /> </SwiperSlide>}
                </Swiper>
                
            </div>
            <div className="desktopSlide-2 hidden lg:block">
                <img className="rounded-3xl h-[360px]" src={slideDesktop2} alt="desktopSlide" />
            </div>
        </div>
    )
}

export default HeaderSlider;