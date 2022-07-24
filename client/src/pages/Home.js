import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className=" w-screen mt-21">
      {/* Slider */}
      <section className="text-center">
        <div className="flex h-[500px] md:h-[600px] md:w-4/5 shadow-lg rounded md:mx-auto my-3"></div>
      </section>
      {/* Product */}
      <section className="mt-10">
        <div className="text-center">
          <h1 className="font-bold text-4xl ">Products</h1>
          <hr className="w-[100px] border-t-black border-t-2 mx-auto" />
          <div className="flex mx-auto md:w-4/5 flex-wrap md:flex-row shadow-lg justify-between p-[10px]">
            <article className="border-solid border-[1px] border-gray-500 w-[280px] h-[380px] rounded-t-xl bg-zinc-50 my-3 flex flex-col justify-start hover:shadow-xl transition duration-500">
              <img
                src="https://phucanhcdn.com/media/product/37381_laptop_microsoft_laptop_3_ryzen_7_1_2.jpg"
                alt="laptop"
                className="w-[100%] h-[50%] object-cover rounded-t-xl border-b-[1px] border-solid border-gray-300"
              />
              <Link className="font-semibold text-lg mt-3" to="/product/1">
                Laptop Surface Pro
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
