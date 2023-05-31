import React from "react";
import OrdersProductDropList from "./OrdersProductDropList";

function OrdersCard({ data }) {
  return (
    <div
      className="grid grid-cols-9 w-full border-b-[1px] h-[75px]"
      key={data.id}
    >
      <input
        type="checkbox"
        className="w-[30px] h-[30px] m-auto rounded-2x bg-[#A8A8A8]"
      />
      <p className="text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] my-auto capitalize text-[#0066b2]">
        {data?.id.slice(2, 8)}
      </p>
      <div className="my-auto capitalize text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#002D62] font-bold flex items-center col-start-3 col-end-5">
        {data.firstName + " " + data.lastName}
      </div>
      <h4 className="my-auto capitalize text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#0066b2] col-start-5 col-end-7">
        {data.phone}
      </h4>
      <div className="my-auto capitalize text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#0066b2] flex items-center">
        <span className="text-[#00563B] bg-[#17B169] p-2 rounded-xl font-bold">
          {data.status}
        </span>
      </div>
      <h4 className="my-auto capitalize text-[0.7rem] text-[#0066b2] flex items-center">
        <OrdersProductDropList options={data.products} />
      </h4>
      <h4 className="my-auto capitalize text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#0066b2]">
        $ {data.totalSales}
      </h4>
    </div>
  );
}

export default OrdersCard;
