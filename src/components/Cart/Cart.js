import React, { useContext } from "react";
import { Link } from "react-router-dom";

// components
import CartProduct from "./CartProduct";

// functions
import { toFarsiNumber } from "../../helper/functions";

// ---images
import cartIllustrition from "../../images/cart.svg";

// --- contexts
import { cartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className="">
      {state.selectedItems.length !== 0 ? (
        <div className="flex flex-col justify-center px-3 my-5 gap-5 lg:flex-row">
          <div className="cart-products w-full lg:w-3/4">
            {state.selectedItems.map((product) => (
              <CartProduct key={product.id} data={product} />
            ))}
          </div>
          <div className="checkout w-full lg:w-72 xl:w-80 h-[300px] p-3 bg-[#f5f5f5] rounded-2xl">
            <h2 className="text-[#353535] text-[18px] font-semibold mb-5">
              اطلاعات پرداخت
            </h2>

            {/* total price */}
            <div className="total-quantity flex justify-between items-center">
              <div className="products-quantity flex gap-2 items-center">
                <span className="text-[#333]">مبلغ کالاها</span>
                <div className="bg-[#3b80ff] text-sm flex justify-center items-center w-6 h-6 text-white rounded-lg">
                  <span>{toFarsiNumber(state.selectedItems.length)}</span>
                </div>
              </div>
              <div className="total-price flex items-center gap-2">
                <span className="text-xl text-[#252525]">
                  {toFarsiNumber(state.totalWithoutOff)}
                </span>
                <span>تومان</span>
              </div>
            </div>

            {/* off products */}
            <div className="off flex justify-between items-center text-red-500 mt-4 pb-3 border-b">
              <span>تخفیف</span>
              <div className="off-amount flex items-center gap-2">
                <span className="text-lg">{toFarsiNumber(state.offPrice)}</span>
                <span>تومان</span>
              </div>
            </div>

            <div>
              <div className="pay-price mt-3 flex justify-between items-center">
                <span className="text-[#252525]">مبلغ قابل پرداخت</span>
                <div className="off-amount flex items-center gap-2">
                  <span className="text-xl text-[#252525]">
                    {toFarsiNumber(state.total)}
                  </span>
                  <span>تومان</span>
                </div>
              </div>
              <button
                onClick={() => dispatch({ type: "CHECKOUT", payload: state })}
                className="text-[14px] mt-2 font-semibold bg-[#3b80ff] text-white w-full h-11 rounded-xl"
              >
                تسویه حساب
              </button>
              <button
                onClick={() => dispatch({ type: "CLEAR", payload: state })}
                className="text-[14px] mt-2 font-semibold bg-red-400 text-white w-full h-11 rounded-xl"
              >
                حذف همه کالاها از سبد خرید
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[70vh] gap-4">
          <img
            className="w-64 h-64 sm:w-[296px] sm:h-[296px]"
            src={cartIllustrition}
            alt="cartIsEmpty"
          />
          {state.checkout ? (
            <h2 className="text-lg font-semibold text-green-500">
              پرداخت با موفقیت انجام شد
            </h2>
          ) : (
            <h2 className="text-lg font-semibold text-[#25282c]">
              سبد خرید شما خالی است
            </h2>
          )}
          <h3 className="text-[#5d6670]">
            مبیت کالاهای زیادی دارد که شما دوست خواهید داشت
          </h3>
          <Link
            to="/"
            className="text-white bg-[#3b80ff] px-6 py-[10px] rounded-[12px]"
          >
            بازگشت به فروشگاه
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;