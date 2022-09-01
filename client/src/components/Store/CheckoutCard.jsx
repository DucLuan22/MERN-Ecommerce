import React from "react";

function CheckoutCard() {
  return (
    <main className="flex justify-between p-2 border-">
      <div className="flex">
        <img
          src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/0/_0001_46685_ideapad_5_pro_14_grey_ha1.jpg"
          alt=""
          className="w-24"
        />
        <div className="flex-col mx-3 mt-1">
          <h1 className="text-lg font-semibold">Laptop123</h1>
          <p className="font-semibold text-gray-500">Total: $2</p>
        </div>
      </div>
      <div className="text-xl font-semibold mt-1">
        <span className="bg-gray-500 justify-start text-gray-200 rounded-[100%] p-[2px] px-[6px]">
          x2
        </span>
      </div>
    </main>
  );
}

export default CheckoutCard;
