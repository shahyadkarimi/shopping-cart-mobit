import React from "react"

// --- images
import phone from "../../../images/header-category/phone.svg"
import phoneStuff from "../../../images/header-category/phone-stuff.svg"
import computer from "../../../images/header-category/computer.svg"
import laptop from "../../../images/header-category/laptop.svg"
import tablet from "../../../images/header-category/tablet.svg"
import airpods from "../../../images/header-category/airpods.svg"
import smartWatch from "../../../images/header-category/smart-watch.svg"
import powerBanks from "../../../images/header-category/power-banks.svg"

const HeaderCat = () => {
    return(
        <div className="w-full mt-3 overflow-hidden lg:mt-7">
            <h3 className="mb-3 font-semibold text-[#323436] lg:hidden">دسته بندی های منتخب</h3>
            <div className="mobit-category w-full flex pb-5 overflow-auto md:justify-between ">
                <div className="phone cursor-pointer flex flex-col justify-center items-center gap-2 text-[14.4px] xl:text-[15.5px] text-[#323436] group">
                    <div className="bg-[#f5f5f5] flex justify-center items-center mx-5 md:mx-0 w-16 h-16 rounded-2xl"> <img className="w-16 h-16 lg:w-[72px] lg:h-[72px] group-hover:scale-110 transition-all duration-300" src={phone} alt="" /> </div>
                    <h4 className="group-hover:text-[#0a0a0a] transition-all duration-300">گوشی موبایل</h4>
                </div>
                <div className="phoneStuff cursor-pointer flex flex-col justify-center items-center gap-2 text-[14.4px] xl:text-[15.5px] text-[#323436] group">
                    <div className="bg-[#f5f5f5] flex justify-center items-center mx-5 md:mx-0 w-16 h-16 rounded-2xl"> <img className="w-16 h-16 lg:w-[72px] lg:h-[72px] group-hover:scale-110 transition-all duration-300" src={phoneStuff} alt="" /> </div>
                    <h4 className="group-hover:text-[#0a0a0a] transition-all duration-300">لوازم جانبی</h4>
                </div>
                <div className="computer cursor-pointer flex flex-col justify-center items-center gap-2 text-[14.4px] xl:text-[15.5px] text-[#323436] group">
                    <div className="bg-[#f5f5f5] flex justify-center items-center mx-5 md:mx-0 w-16 h-16 rounded-2xl"> <img className="w-16 h-16 lg:w-[72px] lg:h-[72px] group-hover:scale-110 transition-all duration-300" src={computer} alt="" /> </div>
                    <h4 className="group-hover:text-[#0a0a0a] transition-all duration-300">قطعات کامپیوتر</h4>
                </div>
                <div className="laptop cursor-pointer flex flex-col justify-center items-center gap-2 text-[14.4px] xl:text-[15.5px] text-[#323436] group">
                    <div className="bg-[#f5f5f5] flex justify-center items-center mx-5 md:mx-0 w-16 h-16 rounded-2xl"> <img className="w-16 h-16 lg:w-[72px] lg:h-[72px] group-hover:scale-110 transition-all duration-300" src={laptop} alt="" /> </div>
                    <h4 className="group-hover:text-[#0a0a0a] transition-all duration-300">لپ تاپ</h4>
                </div>
                <div className="tablet cursor-pointer flex flex-col justify-center items-center gap-2 text-[14.4px] xl:text-[15.5px] text-[#323436] group">
                    <div className="bg-[#f5f5f5] flex justify-center items-center mx-5 md:mx-0 w-16 h-16 rounded-2xl"> <img className="w-16 h-16 lg:w-[72px] lg:h-[72px] group-hover:scale-110 transition-all duration-300" src={tablet} alt="" /> </div>
                    <h4 className="group-hover:text-[#0a0a0a] transition-all duration-300">تبلت</h4>
                </div>
                <div className="powerBanks cursor-pointer flex flex-col justify-center items-center gap-2 text-[14.4px] xl:text-[15.5px] text-[#323436] group">
                    <div className="bg-[#f5f5f5] flex justify-center items-center mx-5 md:mx-0 w-16 h-16 rounded-2xl"> <img className="w-16 h-16 lg:w-[72px] lg:h-[72px] group-hover:scale-110 transition-all duration-300" src={powerBanks} alt="" /> </div>
                    <h4 className="group-hover:text-[#0a0a0a] transition-all duration-300">پاور بانک</h4>
                </div>
                <div className="airpods cursor-pointer flex flex-col justify-center items-center gap-2 text-[14.4px] xl:text-[15.5px] text-[#323436] group">
                    <div className="bg-[#f5f5f5] flex justify-center items-center mx-5 md:mx-0 w-16 h-16 rounded-2xl"> <img className="w-16 h-16 lg:w-[72px] lg:h-[72px] group-hover:scale-110 transition-all duration-300" src={airpods} alt="" /> </div>
                    <h4 className="group-hover:text-[#0a0a0a] transition-all duration-300">هنذفری</h4>
                </div>
                <div className="smartWatch cursor-pointer flex flex-col justify-center items-center gap-2 text-[14.4px] xl:text-[15.5px] text-[#323436] group">
                    <div className="bg-[#f5f5f5] flex justify-center items-center mx-5 md:mx-0 w-16 h-16 rounded-2xl"> <img className="w-16 h-16 lg:w-[72px] lg:h-[72px] group-hover:scale-110 transition-all duration-300" src={smartWatch} alt="" /> </div>
                    <h4 className="group-hover:text-[#0a0a0a] transition-all duration-300">ساعت هوشمند</h4>
                </div>
            </div>
        </div>
    )
}

export default HeaderCat;