import React from "react";
import OrdersProductDropList from "../OrdersPage/OrdersProductDropList";

function HistoryCard({ data }) {
  const backgroundStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-green-400";
    }
  };
  return (
    <div
      className="grid grid-cols-6 md:grid-cols-10 w-full border-b-[1px] h-[75px]"
      key={data.id}
    >
      <p className="text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] my-auto capitalize text-[#0066b2] ml-10 col-span-2 md:col-span-1">
        {data?.id.slice(2, 8)}
      </p>
      <div className="my-auto hidden text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#002D62] font-bold md:flex items-center col-start-3 col-end-5">
        {data.email.length > 25
          ? data.email.substring(0, 25) + "..."
          : data.email}
      </div>
      <h4 className="my-auto hidden capitalize text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem]  md:flex lg:text-[1rem] text-[#0066b2] col-start-5 col-end-7">
        {data.phone}
      </h4>
      <h4 className="my-auto capitalize text-[0.7rem] text-[#0066b2] flex items-center col-span-2 md:col-span-1">
        <OrdersProductDropList options={data.products} />
      </h4>
      <h4 className="my-auto capitalize text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#0066b2]">
        $ {data.totalSales}
      </h4>
      <div className="my-auto uppercase text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#000000] text-center flex justify-center  font-semibold">
        <h4 className={`${backgroundStatusColor(data.status)} p-1 rounded-sm`}>
          {data.status}
        </h4>
      </div>
    </div>
  );
}

export default HistoryCard;
