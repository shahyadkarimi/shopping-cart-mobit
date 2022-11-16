import React from "react"

// ---- components
import HeaderSlider from "./HeaderSlider"
import HeaderCat from "./HeaderCat"
import OfferTimer from "./OfferTimer"
import SpecialOffer from "./SpecialOfferProducts/SpecialOffer"

const Home = () => {
    return(
        <div className="max-w-fit mx-auto px-3 sm:px-5">
            <HeaderSlider />
            <HeaderCat />
            <OfferTimer timer={"December 16,2022"}/>
            <SpecialOffer />
        </div>
    )
}

export default Home;