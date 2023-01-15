import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// ---- css
import "./ProductPage.css";

// --- functions
import { toFarsiNumber, isInCart, quantity } from "../../helper/functions";

// --- contexts
import { ProductsContexts } from "../../contexts/ProductsContext";
import { cartContext } from "../../contexts/CartContext";

// components
import ImageSlider from "./ImageSlider";

const ProductPage = () => {
  // cart context
  const { state, dispatch } = useContext(cartContext);

  // get params from the url
  const params = useParams();
  const productParams = Number(params.productId);

  // get data
  const products = useContext(ProductsContexts);

  // find the product
  const product =
    products.data &&
    products.data.product.find((product) => product.id === productParams);

  return (
    <div>
      {products.data && (
        <div className="flex flex-col lg:flex-row">
          {/* image slider */}
          <ImageSlider data={product} />
          {/* add to cart section */}
          <div className="bg-white h-20 flex justify-between items-center mt-5 fixed left-0 right-0 bottom-0 px-5 lg:hidden">
            <div className="add-btn flex justify-center items-center gap-2">
              {/* add or increase btn */}
              {isInCart(state, product.id) ? (
                <button
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: product })
                  }
                  className="w-8 h-8 flex justify-center items-center bg-[#3b80ff] rounded-lg hover:bg-[#1165ff] transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-5 h-5 transition-all duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_ITEM", payload: product })
                  }
                  className="text-[14px] font-semibold bg-[#3b80ff] text-white w-40 h-11 rounded-xl"
                >
                  افزودن به سبد خرید
                </button>
              )}

              {/* products quantity */}
              {isInCart(state, product.id) && (
                <span className="w-5 flex justify-center text-lg font-semibold">
                  {" "}
                  {quantity(state, product.id) &&
                    toFarsiNumber(quantity(state, product.id))}{" "}
                </span>
              )}

              {/* remove btn */}
              {quantity(state, product.id) === 1 && (
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: product })
                  }
                  className="w-8 h-8 flex justify-center items-center bg-[#3b80ff] rounded-lg hover:bg-[#1165ff] transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-5 h-5 transition-all duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              )}

              {/* decrease btn */}
              {quantity(state, product.id) > 1 && (
                <button
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: product })
                  }
                  className="w-8 h-8 flex justify-center items-center bg-[#3b80ff] rounded-lg hover:bg-[#1165ff] transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="w-5 h-5 transition-all duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 12H6"
                    />
                  </svg>
                </button>
              )}
              {isInCart(state, product.id) && (
                <Link
                  to="/cart"
                  className="go-to-cart flex justify-center gap-2 items-center text-[#3b80ff]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#3b80ff"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>

                  <span className="text-[12px]">مشاهده سبد خرید</span>
                </Link>
              )}
            </div>
            <div className="price-sec flex flex-col gap-1 mt-[10px]">
              <div className="off-price flex justify-between">
                <div className="offer flex text-sm w-fit text-white h-[20px] justify-center items-center px-1 gap-[2px] bg-[#ff6a6a] rounded-md">
                  <span> {toFarsiNumber(product.off)} </span>
                  <svg
                    width="15px"
                    height="15px"
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
                <span className="line-through">
                  {toFarsiNumber(product.price)}
                </span>
              </div>
              <div className="price flex justify-center items-center gap-2">
                <span className="text-lg font-semibold">
                  {toFarsiNumber(product.offPrice)}
                </span>
                <span className="text-[14.5px]">تومان</span>
              </div>
            </div>
          </div>

          {/* product details */}
          <div className="product-details w-full mb-5 px-5 lg:mt-6 lg:px-0 lg:pl-5">
            <div className="titles flex flex-col gap-2">
              <div className="text-lg fa-title">
                <h2>{product.title}</h2>
              </div>
              <div className="en-title flex flex-col gap-1 text-[14.5px] text-[#666]">
                <h3 className="text-left">{product.enTitle}</h3>
                <h4 className="text-center -z-10 relative">Mbt-21129</h4>
              </div>
            </div>
            <div className="description mt-2">
              <h2 className="text-[15px] font-semibold text-[#353535]">
                نقد و بررسی {product.enTitle}
              </h2>
              <p className="text-justify text-sm mt-2">{product.description}</p>
            </div>
          </div>

          {/* seller details */}
          <div className="px-5 lg:pl-5 lg:mt-6 mb-24">
            <div className="w-full lg:w-[230px] xl:w-[250px] 2xl:w-[280px] h-auto bg-[#f5f5f5] rounded-xl p-3">
              <h2 className="text-[#353535] text-[17px] font-semibold mb-3">
                فروشنده
              </h2>
              {/* seller */}
              <div className="seller">
                <div className="seller-name flex items-center gap-2 font-semibold text-[#353535]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#3b80ff"
                    className="w-7 h-7"
                  >
                    <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                    <path
                      fillRule="evenodd"
                      d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3> مبیت </h3>
                </div>
                {/* rate */}
                <div className="rate-performance flex justify-evenly lg:justify-center items-center gap-2 mt-3 pb-2 border-b">
                  <div className="rate flex">
                    <span className="text-[#666] text-[14px] font-semibold">
                      امتیاز :
                    </span>
                    <span className="text-[#ffa726] font-semibold mr-2 ml-1">
                      {toFarsiNumber(product.rate)}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#ffa726"
                      className="w-5 h-5 self-start"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="block bg-[#c8c8c8] w-[2px] h-6"></span>
                  <div className="performance flex gap-2">
                    <span className="text-[#666] text-[14px] font-semibold">
                      عملکرد :
                    </span>
                    <span className="text-[#3b80ff] text-[14.5px] font-semibold">
                      عالی
                    </span>
                  </div>
                </div>
              </div>
              {/* warranty */}
              <div className="warranty flex items-center gap-2 font-semibold text-[#353535] mt-3 pb-3 border-b">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 fill-green-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-[15px] self-end">گارانتی ۱۸ ماهه شرکتی</h3>
              </div>
              {/* product in store */}
              <div className="store flex gap-2 font-semibold text-[#353535] mt-3 pb-3 lg:border-b">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 fill-orange-500"
                >
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path
                    fillRule="evenodd"
                    d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z"
                    clipRule="evenodd"
                  />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
                <h3 className="text-[15px] self-end"> موجود در انبار موبیت </h3>
              </div>
              {/* product price & add to cart btns */}
              <div className="price-add-btn hidden lg:flex flex-col items-end mt-3">
                <div className="price mb-1">
                  <div className="off-price flex justify-between">
                    <span className="line-through text-[#353535]">
                      {toFarsiNumber(product.price)}
                    </span>
                    <div className="flex justify-between">
                      <div className="offer flex text-sm w-fit text-white h-[20px] justify-center items-center px-1 gap-[2px] bg-[#ff6a6a] rounded-md">
                        <span> {toFarsiNumber(product.off)} </span>
                        <svg
                          width="15px"
                          height="15px"
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
                    </div>
                  </div>
                  <div className="real-price flex items-center gap-2">
                    <span className="text-xl font-semibold text-[#353535]">
                      {toFarsiNumber(product.offPrice)}
                    </span>
                    <span className="text-[14.5px]">تومان</span>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="flex w-full justify-start items-center gap-1">
                    {/* add or increase btn */}
                    {isInCart(state, product.id) ? (
                      <button
                        onClick={() =>
                          dispatch({ type: "INCREASE", payload: product })
                        }
                        className="w-8 h-8 flex justify-center items-center bg-[#3b80ff] rounded-lg hover:bg-[#1165ff] transition-all duration-300 xl:w-9 xl:h-9"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="white"
                          className="w-5 h-5 transition-all duration-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          dispatch({ type: "ADD_ITEM", payload: product })
                        }
                        className="text-[14px] font-semibold bg-[#3b80ff] text-white w-full h-11 rounded-xl"
                      >
                        افزودن به سبد خرید
                      </button>
                    )}
                    {/* products quantity */}
                    {isInCart(state, product.id) && (
                      <span className="w-5 flex justify-center text-lg font-semibold">
                        {quantity(state, product.id) &&
                          toFarsiNumber(quantity(state, product.id))}
                      </span>
                    )}
                    {/* remove btn */}
                    {quantity(state, product.id) === 1 && (
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE_ITEM", payload: product })
                        }
                        className="w-8 h-8 flex justify-center items-center bg-[#3b80ff] rounded-lg hover:bg-[#1165ff] transition-all duration-300 xl:w-9 xl:h-9"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="white"
                          className="w-5 h-5 transition-all duration-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    )}
                    {quantity(state, product.id) > 1 && (
                      <button
                        onClick={() =>
                          dispatch({ type: "DECREASE", payload: product })
                        }
                        className="w-8 h-8 flex justify-center items-center bg-[#3b80ff] rounded-lg hover:bg-[#1165ff] transition-all duration-300 xl:w-9 xl:h-9"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="white"
                          className="w-5 h-5 transition-all duration-300"
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
                  {isInCart(state, product.id) && (
                    <Link
                      to="/cart"
                      className="go-to-cart w-full flex justify-center gap-2 items-center text-[#3b80ff]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#3b80ff"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>

                      <span className="text-[12px]">مشاهده سبد خرید</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
