import React from "react"

// images 
import logo from "../images/mobit-logo.svg"

const MobileNav = () =>{
    return(
        <div className="lg:hidden">
            
            {/* Navbar */}
            <div className="navbar w-full flex justify-between items-center h-14 px-5">
                <div className="menu-bars cursor-pointer w-8 h-8 flex justify-center items-center rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5d6670" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div className="logo">
                    <a href="#">
                        <img className="w-16" src={logo} alt="mobit-logo" />
                    </a>
                </div>
                <div className="city flex items-center gap-1">
                    <div className="location">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5d6670" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-sm text-[#5d6670]">انتخاب شهر</p>
                </div>
            </div>

            {/* Search bar */}
            <div className="search px-5 relative">
                <input className="w-full bg-[#f5f5f5] h-11 rounded-lg px-12 outline-none ring-[#3b80ff] focus:ring-2 transition-all duration-500" type="text" placeholder="جست و جو در مبیت" />
                <div className="search-icon absolute -translate-y-2/4 top-2/4 right-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.1" stroke="#5d6670" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default MobileNav;