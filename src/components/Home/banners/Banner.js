import React, { useState, useEffect } from "react";

// --- swiper js
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

// --- functions
// window size
import { getWindowSize } from "../../../helper/functions";

// --- images
import lenovo from "../../../images/Banners/lenovo.jpg"
import adata from "../../../images/Banners/Adata.jpg"

const Banner = () => {
  // get window size when screen resize for slider in mobile screens
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="banners">
        {
          windowSize.innerWidth < 1024 && 
          <Swiper autoplay={{delay: 2500,disableOnInteraction: false,}} loop={true} pagination={{clickable:true,}} modules={[Pagination, Autoplay]} className="mySwiper rounded-lg">
            <SwiperSlide> <img src={lenovo} alt="lenovoBanner" /> </SwiperSlide>
            <SwiperSlide> <img src={adata} alt="lenovoBanner" /> </SwiperSlide>
          </Swiper>
        }
        
        <div className="hidden lg:block my-5">
          <div className="flex gap-5">
            <img className="w-full h-[165px] xl:h-[190px] 2xl:h-[230px]" src={lenovo} alt="lenovoBanner" />
            <img className="w-full h-[165px] xl:h-[190px] 2xl:h-[230px]" src={adata} alt="lenovoBanner" />
          </div>
        </div>
    </div>
  );
};

export default Banner;
