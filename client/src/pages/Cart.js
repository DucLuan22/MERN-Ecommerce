import React from "react";
import CartItem from "../components/CartItem";
const Cart = () => {
  return (
    <main className="w-screen h-screen bg-neutral-200 fixed">
      <section className="mt-24 bg-white px-2 md:px-11 w-[97%] mx-auto rounded-lg shadow-lg flex flex-col md:flex-row py-10">
        <div className="flex-grow-[3] px-1 md:px-9">
          <div className="flex justify-between text-[#2B2B2B] font-bold text-xl md:text-2xl">
            <h1>Shopping Cart</h1>
            <h1>3 Items</h1>
          </div>
          <hr className="my-4 border-t-[2px] border-gray-300" />
          <div className="text-left overflow-y-auto h-[400px] md:h-[600px]">
            <table className="w-full">
              <thead>
                <tr className="text-[#969696] cart-header">
                  <th>PRODUCT DETAILS</th>
                  <th className="text-center hidden md:table-cell">QUANTITY</th>
                  <th className="hidden md:table-cell">PRICE</th>
                  <th className="hidden md:table-cell">TOTAL</th>
                </tr>
              </thead>
              <tbody className="">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
              </tbody>
            </table>
          </div>
        </div>
        {/* Order Summary */}
        <div className="flex-grow-[1] mt-10 md:mt-0">
          <div>
            <h1 className="text-[#2B2B2B] font-bold text-xl md:text-2xl text-center">
              Order Summary
            </h1>
          </div>
          <hr className="my-4 border-t-[2px] border-gray-300" />
        </div>
      </section>
    </main>
  );
};

export default Cart;
