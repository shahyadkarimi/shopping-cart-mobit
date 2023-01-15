import React from "react"

// ---- components
import HeaderSlider from "./header/HeaderSlider"
import HeaderCat from "./header/HeaderCat"
import SectionTitle from "../shared/SectionTitle"
import SpecialOfferProducts from "./SpecialOfferProducts"
import Banner from "./banners/Banner"
import MostViewedProducts from "./MostViewedProducts"

const Home = () => {
    return(
        <div className="max-w-fit mx-auto px-3 sm:px-5">
            <HeaderSlider />
            <HeaderCat />
            <SectionTitle time={"February 16,2023"} timer={true} bgColor={"#ff6a6a"} title={"پیشنهاد ویژه مبیت"} titleColor={"white"} icon={true} more={"white"} />
            <SpecialOfferProducts />
            <Banner />
            <SectionTitle  time={""} timer={false} bgColor={"#f5f5f5"} title={"پر بازدید ترین ها"} titleColor={"#000"} icon={false} more={"#666"} />
            <MostViewedProducts />
        </div>
    )
}

export default Home;