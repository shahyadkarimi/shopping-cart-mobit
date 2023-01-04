import React, { useState } from "react";

// --- functions
import { idGenerator } from "../../helper/functions";

const ImageSlider = ({ data }) => {

  const [slider, setSlider] = useState(data.images[0]);

  const clickHandler = (index) => {
    let activeSlider = data.images[index];

    setSlider(activeSlider);
  };

  return (
    <div>
      <div className="productPage-Slider relative flex flex-col gap-4 p-5 justify-center items-center lg:w-[350px] lg:h-[350px] lg:mt-14 xl:w-[400px] xl:h-[400px] xl:mt-6 2xl:w-[450px] 2xl:h-[450px] 2xl:mt-0">
        <div className="w-full h-full p-5 bg-[#f5f5f5] flex justify-center items-center rounded-3xl">
          <img className="w-64" src={slider.img} alt="" />
        </div>
        <div className="w-full flex justify-between">
          {data.images.map((image, index) => (
            <div key={idGenerator()} className={slider.id === index ? "bg-[#f5f5f5] opacity-100 p-3 rounded-2xl cursor-pointer" : "bg-[#f5f5f5] opacity-40 p-3 rounded-2xl cursor-pointer"}>
                
              <img
                className="w-[70px] h-[70px]"
                src={image.img}
                onClick={() => clickHandler(index)}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
