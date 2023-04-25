import React from "react";
import { IoIosPaper } from "react-icons/io";
import { BsPiggyBank } from "react-icons/bs";

function DashBoardUpdate() {
  return (
    <div className="dashboard-containers grid grid-cols-2 gap-x-10">
      <span className="h-[180px] bg-[#C7F2FF] rounded-tr-lg rounded-bl-lg rounded-tl-[25%] rounded-br-[25%] col-span-1">
        <div className="flex justify-evenly items-center h-full">
          <IoIosPaper className="text-7xl text-[#42427D] bg-white rounded-tr-sm rounded-bl-sm rounded-tl-[35%] rounded-br-[35%] p-2" />
          <div className="text-[#42427D]">
            <h3 className="text-3xl font-bold mx">22 643</h3>
            <p className="text-xl font-semibold">Orders</p>
          </div>
          <span className=" rounded-tr-sm rounded-bl-sm rounded-tl-[35%] rounded-br-[35%] bg-[#42427D] p-2 font-semibold text-white relative bottom-3">
            +29
          </span>
        </div>
      </span>
      <span className="col-span-1  h-[180px] bg-[#FBE6EE] rounded-tl-lg rounded-br-lg rounded-tr-[25%] rounded-bl-[25%]">
        <div className="flex justify-evenly items-center h-full">
          <BsPiggyBank className="text-7xl text-[#42427D] bg-white rounded-tl-sm rounded-br-sm rounded-tr-[35%] rounded-bl-[35%] p-2" />
          <div className="text-[#42427D]">
            <h3 className="text-3xl font-bold">12 890,90</h3>
            <p className="text-xl font-semibold">Revenue</p>
          </div>
          <span className="rrounded-tl-sm rounded-br-sm rounded-tr-xl rounded-bl-xl bg-[#42427D] p-1 font-semibold text-white relative bottom-3">
            +$ 890,00
          </span>
        </div>
      </span>
      <section className="col-span-2 h-[470px] w-auto mt-5">
        Sale Statistic
      </section>
    </div>
  );
}

export default DashBoardUpdate;
