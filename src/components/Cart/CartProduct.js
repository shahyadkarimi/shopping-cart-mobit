import React, { useContext } from "react";
import { Link } from "react-router-dom";

// --- functions
import { toFarsiNumber, quantity } from "../../helper/functions";

// --- contexts
import { cartContext } from "../../contexts/CartContext";

const CartProduct = ({ data }) => {
  const { state, dispatch } = useContext(cartContext);
  console.log(data);
  return (
    <div className="w-full py-2 lg:py-3 flex flex-col gap-3 md:flex-row md:justify-between border-t first:border-0">
      <div className="product-details flex items-center gap-1 lg:gap-3">
        <Link
          to={`/products/${data.id}`}
          className="product-pic bg-[#f5f5f5] p-2 lg:p-4 rounded-xl"
        >
          <img className="w-[75px]" src={data.images[0].img} alt="" />
        </Link>
        <div className="product-title-details flex flex-col gap-3">
          <Link
            to={`/products/${data.id}`}
            className="title text-sm lg:text-base text-[#222]"
          >
            <h2>{data.title}</h2>
          </Link>
          <div className="details flex gap-3 lg:gap-10 lg:text-sm text-[13px] text-[#555]">
            {/* seller */}
            <div className="seller flex gap-2 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#3b80ff"
                className="w-6 h-6"
              >
                <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                <path
                  fillRule="evenodd"
                  d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z"
                  clipRule="evenodd"
                />
              </svg>
              <span>مبیت</span>
            </div>

            {/* warranty */}
            <div className="warranty flex gap-2 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              <span> گارانتی ۱۸ ماهه شرکتی </span>
            </div>

            {/* post by mobit */}
            <div className="post-by-mobit flex gap-2 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-[#1869ff]"
              >
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
              </svg>
              <span>ارسال توسط مبیت</span>
            </div>
          </div>
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
            className="remove-btn hidden lg:flex items-center gap-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 stroke-[#666] transition-all duration-300 group-hover:stroke-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>

            {/* remove btn */}
            <span className="text-sm text-[#666] transition-all duration-300 group-hover:text-red-500">
              حذف محصول از سبد خرید
            </span>
          </button>
        </div>
      </div>

      {/* product price */}
      <div className="product-price flex flex-row-reverse justify-between md:flex-col md:justify-evenly">
        <div className="off-price flex justify-center items-center flex-col gap-1">
          <div className="flex flex-row-reverse justify-center items-center gap-2">
            <div className="offer flex text-[15px] w-fit text-white h-[24px] justify-center items-center px-1 gap-[2px] bg-[#ff6a6a] rounded-md">
              <span> {toFarsiNumber(data.off)} </span>
              <svg
                width="15px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM7 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  fill="#fff"
                />
              </svg>
            </div>
            <span className="line-through"> {toFarsiNumber(data.price)} </span>
          </div>
          <div className="price flex justify-center items-center gap-1">
            <span className="price text-xl text-[#222]">
              {" "}
              {toFarsiNumber(data.offPrice)}{" "}
            </span>
            <span>تومان</span>
          </div>
        </div>

        {/* btns */}
        <div className="cart-btns flex justify-center items-center gap-3 h-11 px-3 border-[#f5f5f5] border-2 rounded-xl">
          {/* increase btn */}
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: data })}
            className="add-to-cart w-7 h-7 flex justify-center items-center rounded-lg transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#3b80ff"
              className="w-6 h-6 transition-all duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>

          {/* products quantity */}
          <span className="text-base w-4 flex justify-center items-center font-semibold">
            {quantity(state, data.id) &&
              toFarsiNumber(quantity(state, data.id))}
          </span>

          {/* decrease or delete btn */}
          {quantity(state, data.id) === 1 && (
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
              className="add-to-cart w-7 h-7 flex justify-center items-center rounded-lg transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-5 h-5 stroke-red-500 transition-all duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          )}

          {quantity(state, data.id) > 1 && (
            <button
              onClick={() => dispatch({ type: "DECREASE", payload: data })}
              className="add-to-cart w-7 h-7 flex justify-center items-center rounded-lg transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 stroke-red-500 transition-all duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
