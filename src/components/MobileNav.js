import React, { useContext } from "react";
import { Link } from "react-router-dom";

// images
import logo from "../images/mobit-logo.svg";

// --- context
import { cartContext } from "../contexts/CartContext";
import { toFarsiNumber } from "../helper/functions";

const MobileNav = () => {
  const { state } = useContext(cartContext);

  return (
    <div className="lg:hidden pb-3 shadow-[0px_0px_10px_0px_#00000020]">
      {/* Navbar */}
      <div className="navbar w-full flex justify-between items-center h-14 px-3 sm:px-5">
        <div className="menu-bars bg-slate-50 cursor-pointer w-9 h-9 flex justify-center items-center rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#5d6670"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/* logo */}
        <Link to="/" className="logo">
          <img className="w-16" src={logo} alt="mobit-logo" />
        </Link>
        {/* cart */}
        <div className="text-[#abb4bc]">
          {state.selectedItems.length === 0 ? (
            <Link
              to="/cart"
              className="bg-[#f5f5f5] relative w-9 h-9 text-sm flex items-center justify-center rounded-lg"
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
              <span className="absolute text-xs flex justify-center items-center text-white w-4 h-4 -top-1 -right-1 bg-[#3b80ff] rounded-md">
                  {toFarsiNumber(state.selectedItems.length)}
              </span>
            </Link>
          ) : (
            <Link
              to="/cart"
              className="bg-[#f5f5f5] relative w-9 h-9 text-sm flex items-center justify-center rounded-lg transition-all duration-300"
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

              <span className="absolute text-xs flex justify-center items-center text-white w-4 h-4 -top-1 -right-1 bg-[#3b80ff] rounded-md">
                  {toFarsiNumber(state.selectedItems.length)}
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Search bar */}
      <div className="search relative px-3 sm:px-5">
        <input
          className="w-full bg-[#f5f5f5] h-11 rounded-lg px-12 outline-none ring-[#3b80ff] focus:ring-2 transition-all duration-500"
          type="text"
          placeholder="جست و جو در مبیت"
        />
        <div className="search-icon absolute -translate-y-2/4 top-2/4 right-8">
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
    </div>
  );
};

export default MobileNav;
