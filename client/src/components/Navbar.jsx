import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [isDrop, setIsDrop] = useState(false);
  return (
    <nav className="shadow-md w-screen fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-around bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-3xl cursor-pointer flex items-center text-gray-800">
          Luan
        </div>
        <div className="text-3xl absolute right-8 top-6 md:hidden">
          <AiOutlineMenu onClick={() => setIsDrop(!isDrop)} />
        </div>
        <ul
          className={`text-gray-800 md:flex md:items-center link-list gap-8 font-semibold text-xl md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full 
        md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          isDrop ? "top-20" : "top-[-490px]"
        }`}
        >
          <li className="hover:text-gray-500 duration-500 my-7 md:my-0">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-500 duration-500 my-7 md:my-0">
            Brand
          </li>
          <li className="hover:text-gray-500 duration-500 my-7 md:my-0">
            Categories
          </li>
          <li className="hover:text-gray-500 duration-500 my-7 md:my-0 relative">
            <Link to="/cart">
              <AiOutlineShoppingCart className="inline text-2xl" />
            </Link>
            <span className="bg-gray-800 text-white absolute cart-notify bottom-4 left-3 text-sm px-[7px] p-[1px] font-bold">
              0
            </span>
          </li>
          <button className="bg-gray-900 text-white py-2 px-6 font-semibold rounded md:ml-8 hover:bg-slate-700 duration-500">
            <Link to="/auth/login">Login</Link>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
