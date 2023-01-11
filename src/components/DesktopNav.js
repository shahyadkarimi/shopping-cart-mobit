import React, { useContext } from "react";
import { Link } from "react-router-dom";

// --- components
import CartProductPerview from "./Cart/CartProductPerview";

// --- context
import { cartContext } from "../contexts/CartContext";

// --- functions
import { toFarsiNumber } from "../helper/functions";

// images
import logo from "../images/mobit-logo.svg";
import category from "../images/category.svg";
import discount from "../images/discount.svg";
import mag from "../images/mag-g.svg";
import shop from "../images/shop.svg";

const DesktopNav = () => {
  // products
  const { state } = useContext(cartContext);

  return (
    <div className="hidden lg:block shadow-[0px_0px_10px_0px_#00000020] px-10 xl:px-20 2xl:px-28">
      <div className="w-full h-16 flex items-center justify-between">
        {/* navbar right side */}
        <div className="right-side flex items-center gap-6">
          <Link to="/" className="logo">
            <img className="w-20" src={logo} alt="" />
          </Link>
          <div className="search relative">
            <input
              className="w-[450px] xl:w-[600px] 2xl:w-[750px] bg-[#f5f5f5] h-11 rounded-lg px-16 outline-none ring-[#3b80ff] focus:ring-2 transition-all duration-500"
              type="text"
              placeholder="جست و جو در مبیت"
            />
            <div className="search-icon absolute -translate-y-2/4 top-2/4 border-l w-12 h-7 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.1"
                stroke="#5d6670"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
          <div className="city flex items-center gap-1">
            <div className="location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#ffa726"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-xs">ارسال به</h4>
              <h3 className="text-sm font-bold">انتخاب شهر</h3>
            </div>
          </div>
        </div>

        {/* navbar left side */}
        <div className="left-side flex gap-3">
          <div className="login cursor-pointer bg-[#f5f5f5] text-[#abb4bc] text-sm flex items-center justify-center gap-2 p-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>

            <h3>ورود / ثبت نام</h3>
          </div>
          {state.selectedItems.length === 0 ? (
            <div className="cart relative group cursor-pointer text-[#abb4bc]">
              <Link
                to="/cart"
                className="bg-[#f5f5f5] text-sm flex items-center justify-center gap-2 p-3 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>

                <h3>سبد خرید</h3>
              </Link>

              <div className="cart-preview absolute opacity-0 invisible left-0 top-14 z-10 group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="flex flex-col justify-center items-center gap-5 px-2 cursor-default w-96 h-52 bg-white rounded-2xl shadow-[0px_0px_16px_#0000001a]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-[74px] h-[74px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>

                  <h3 className="text-[15px] text-[#636c76]">
                    سبد خرید شما خالی است.
                  </h3>
                </div>
              </div>
            </div>
          ) : (
            <div className="cart relative group cursor-pointer text-[#272a2e] ">
              <Link
                to="/cart"
                className="bg-[#f5f5f5] text-sm flex items-center justify-center gap-2 p-3 rounded-lg transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#3b80ff"
                  className="w-5 h-5 transition-all duration-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">
                  {toFarsiNumber(state.selectedItems.length)}
                </span>
                <h3>کالا </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Link>
              <div className="cart-preview absolute opacity-0 invisible left-0 top-14 z-10 group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="flex flex-col gap-3 cursor-default w-96 h-auto px-3 pt-3 bg-white rounded-2xl shadow-[0px_0px_16px_#0000001a]">
                  <div className="flex flex-col gap-3">
                    {state.selectedItems.map((product) => (
                      <CartProductPerview key={product.id} data={product} />
                    ))}
                  </div>
                  <div className="flex flex-row-reverse justify-between items-center w-full border-t py-2">
                    <div className="show-cart">
                      <Link
                        to="/cart"
                        className="bg-[#3b80ff] text-white px-5 py-[10px] rounded-xl"
                      >
                        مشاهده سبد خرید
                      </Link>
                    </div>

                    <div className="price flex flex-col gap-1">
                      <span className="text-[13px]"> جمع سبد خرید </span>
                      <div className="flex gap-2 justify-center items-center">
                        <span className="text-lg font-semibold">
                          {toFarsiNumber(state.total)}
                        </span>
                        <span>تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Menu list */}
      <div className="menu w-full h-14 flex gap-6 text-sm xl:text-base xl:gap-10 text-[#626262]">
        <div className="category relative cursor-pointer flex gap-2 items-center">
          <img className="w-6" src={category} alt="" />
          <h3>دسته بندی ها</h3>
        </div>
        <div className="discount relative cursor-pointer flex gap-2 items-center">
          <img className="w-6" src={discount} alt="" />
          <h3>پیشنهاد های شگفت انگیز</h3>
        </div>
        <div className="mag relative cursor-pointer flex gap-2 items-center">
          <img className="w-6" src={mag} alt="" />
          <h3>اخبار و مقالات روز</h3>
        </div>
        <div className="shop relative cursor-pointer flex gap-2 items-center">
          <img className="w-6" src={shop} alt="" />
          <h3>همکار و قیمت عمده</h3>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
