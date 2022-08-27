import React from "react";
import WishlistCard from "../../components/Wishlist/WishlistCard";

function Wishlist() {
  return (
    <div className="w-screen h-screen mt-28">
      <section className=" md:mx-24 text-center max-w-full h-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">Wishlist</h1>
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-14 gap-y-12 mx-auto max-w-[1500px]">
          <WishlistCard />
        </div>
      </section>
    </div>
  );
}

export default Wishlist;
