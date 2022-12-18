import React from "react"

// --- functions

// convert english number to farsi 
import { toFarsiNumber } from "../../../helper/functions"

const Products = ({data}) => {
    return (
        <div className="flex flex-col gap-4 w-[345px] h-auto p-2 rounded-2xl hover:shadow-[0px_0px_10px_#00000014] transition-all duration-300 cursor-pointer group">
            <div className="product-image relative w-full h-[150px] flex justify-center items-center bg-[#f5f5f5] rounded-xl lg:h-[200px]">
                <img className="group-hover:scale-110 transition-all duration-300" src={data.image} alt={"product-" + data.id} />
                <div className="absolute top-0 flex justify-between w-full p-2">
                    <div className="right-side flex flex-col gap-3">
                        <div className="offer flex text-[15px] w-fit text-white h-[24px] justify-center items-center px-1 gap-[2px] bg-[#ff6a6a] rounded-md">
                            <span> {toFarsiNumber(data.off)} </span>
                            <svg width="15px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#fff"/>
                            </svg>
                        </div>
                        <div className="delivery flex h-[24px] text-white text-[12.5px] justify-center items-center px-1 gap-1 bg-[#ffa726] rounded-md">
                            <svg width="22px" height="22px" fill="white" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="16" width="12" height="2"/>
                                <rect x="2" y="11" width="10" height="2"/>
                                <path d="M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z"/>
                                <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="cls-1" width="32" height="32"/>
                            </svg>
                            <span className="hidden lg:block"> سریع </span>
                        </div>
                    </div>
                    <div className="left-side">
                        <svg width="26px" height="26px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Iconly/Curved/Discount">
                                <g id="Discount">
                                    <path id="Stroke 1" fillRule="evenodd" clipRule="evenodd" d="M2.75024 12C2.75024 5.063 5.06324 2.75 12.0002 2.75C18.9372 2.75 21.2502 5.063 21.2502 12C21.2502 18.937 18.9372 21.25 12.0002 21.25C5.06324 21.25 2.75024 18.937 2.75024 12Z" stroke="#ff6a6a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path id="Stroke 3" d="M9.42993 14.5697L14.5699 9.42969" stroke="#ff6a6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path id="Stroke 15" d="M14.4955 14.5H14.5045" stroke="#ff6a6a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path id="Stroke 15_2" d="M9.4955 9.5H9.5045" stroke="#ff6a6a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="title h-16 sm:h-16 lg:h-20 text-right text-[15px] text-[#1f1f1f] group-hover:text-black transition-all duration-300 lg:text-[17px]">
                <h3> {data.title} </h3>
            </div>
            <div className="price self-end mt-2">
                <span className="product-price font-semibold text-[15px] md:text-[19px] text-[#1f1f1f]">{toFarsiNumber(data.offPrice)}</span>
                <span className="product-price text-[16px] ml-2 line-through">{toFarsiNumber(data.price)}</span>
                <span className="text-[14.5px]"> تومان </span>
            </div>

            {/* rate & add to cart btn section */}
            <div className="flex flex-row-reverse justify-between items-center">
                <div className="rate flex flex-row-reverse gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffa726" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#666] text-base lg:text-[17px] font-semibold"> {toFarsiNumber(data.rate)} </span>
                    <span className="text-[#666666b2] text-sm self-end"> ({toFarsiNumber(data.comment)} نظر) </span>
                </div>
                <button className="add-to-cart w-9 h-9 flex justify-center items-center bg-[#3b80ff] rounded-lg hover:bg-[#1165ff] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" className="w-5 h-5 transition-all duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Products;