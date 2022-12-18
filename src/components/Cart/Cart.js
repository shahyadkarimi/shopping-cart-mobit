import React from "react"
import { Link } from "react-router-dom"

// ---images
import cartIllustrition from "../../images/cart.svg"

const Cart = () => {
    return(
        <div className="">
            <div className="flex flex-col justify-center items-center h-[70vh] gap-4">
                <img className="w-64 h-64 sm:w-[296px] sm:h-[296px]" src={cartIllustrition} alt="cartIsEmpty" />
                <h2 className="text-lg font-semibold text-[#25282c]">سبد خرید شما خالی است</h2>
                <h3 className="text-[#5d6670]">مبیت کالاهای زیادی دارد که شما دوست خواهید داشت</h3>
                <Link to="/" className="text-white bg-[#3b80ff] px-6 py-[10px] rounded-[12px]"> بازگشت به فروشگاه </Link>
            </div>
        </div>
    )
}

export default Cart;