import React from "react"

// ---- components
import HeaderSlider from "./HeaderSlider"
import HeaderCat from "./HeaderCat"

const Home = () => {
    return(
        <div className="lg:max-w-fit mx-auto px-3 sm:px-5">
            <HeaderSlider />
            <HeaderCat />
        </div>
    )
}

export default Home;