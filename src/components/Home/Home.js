import React from "react"

// ---- components
import HeaderSlider from "./header/HeaderSlider"
import HeaderCat from "./header/HeaderCat"
import SectionTitle from "./shared/SectionTitle"
import SpecialOffer from "./SpecialOfferProducts/SpecialOffer"
import Banner from "./banners/Banner"

const Home = () => {
    return(
        <div className="max-w-fit mx-auto px-3 sm:px-5">
            <HeaderSlider />
            <HeaderCat />
            <SectionTitle time={"December 16,2022"} timer={true} bgColor={"#ff6a6a"} title={"پیشنهاد ویژه مبیت"} titleColor={"#fff"} icon={true} more={"#fff"} />
            <SpecialOffer />
            <Banner />
            <SectionTitle  time={"December 16,2022"} timer={false} bgColor={"#f5f5f5"} title={"پر بازدید ترین ها"} titleColor={"#000"} icon={false} more={"#666"} />
        </div>
    )
}

export default Home;