import React from "react";
import { Card } from "flowbite-react";
import { BsTrash, BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
function WishlistCard({ product }) {
  return (
    <div className="max-w-xs">
      <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <h6 className="font-semibold text-lg">Price: $200</h6>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="">
          <button className="font-semibold bg-white order-b-[1px] border-solid border-black border-[1px] rounded-lg text-black mx-11 hover:bg-slate-300 transition duration-500 p-1 w-[100px]">
            <Link to="/product/">
              <div className="flex items-center gap-1 justify-center">
                <BsCart />
                <p>Buy</p>
              </div>
            </Link>
          </button>
          <button className="font-semibold bg-white order-b-[1px] border-solid border-red-600 border-[1px] rounded-lg text-red-600 mx-11 hover:bg-red-300 transition duration-500 p-1 w-[100px] inline my-3">
            <div className="flex items-center gap-1 justify-center">
              <BsTrash />
              <p>Remove</p>
            </div>
          </button>
        </div>
      </Card>
    </div>
  );
}

export default WishlistCard;
