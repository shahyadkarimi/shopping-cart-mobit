import React from "react"

// ---- components
import HeaderSlider from "./HeaderSlider"
import HeaderCat from "./HeaderCat"
import SpecialOffer from "./SpecialOfferProducts/SpecialOffer"

const Home = () => {
    return(
        <div className="max-w-fit mx-auto px-3 sm:px-5">
            <HeaderSlider />
            <HeaderCat />
            <SpecialOffer />
        </div>
    )
}

export default Home;