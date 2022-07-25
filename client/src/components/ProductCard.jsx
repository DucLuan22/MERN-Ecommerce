import React from 'react'

import { Link } from "react-router-dom";
const ProductCard = ({title}) => {
  return (
        <article className="border-solid border-[1px] border-gray-500 w-[280px] bottom-0 h-[380px] hover:relative hover:bottom-3 rounded-t-xl bg-zinc-50 my-3 flex flex-col justify-start hover:shadow-xl transition-all duration-300 ease-in-out">
              <img
                src="https://phucanhcdn.com/media/product/37381_laptop_microsoft_laptop_3_ryzen_7_1_2.jpg"
                alt="laptop"
                className="w-[100%] h-[50%] object-cover rounded-t-xl border-b-[1px] border-solid border-gray-300"
              />
              <Link className="font-semibold text-lg mt-3" to="/product/1">
                {title}
              </Link>
              <h2>Price: $2000</h2>
              <div className="flex flex-col">
                <button className="font-semibold bg-black text-white mx-11 p-1 hover:bg-gray-800 transition duration-500 rounded-lg my-2">
                  Add to Wishlist
                </button>
                <button className="font-semibold bg-white order-b-[1px] border-solid border-black border-[1px] rounded-lg text-black mx-11 hover:bg-slate-300 transition duration-500 p-1">
                  Buy
                </button>
              </div>
            </article>
  )
}

export default ProductCard