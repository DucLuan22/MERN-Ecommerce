import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Axios from "../../configs/axiosConfig";
import HistoryCard from "./HistoryCard";

const HistoryTable = () => {
  const { loggedUser } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const orders = await Axios.get(
        `/api/store/getOrder/${loggedUser._id}`
      ).then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    };
    getOrders();
  }, []);
  return (
    <div className="w-full mt-5">
      <div className="grid grid-cols-6 md:grid-cols-10 w-full border-t-[1px] border-b-[4px] h-[75px]">
        <p className="text-[1.5rem] my-auto capitalize text-[#707070] ml-10 col-span-2 md:col-span-1">
          ID
        </p>
        <h4 className="my-auto uppercase md:flex hidden text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem]  text-[#707070] col-start-3 col-end-5">
          Email
        </h4>
        <h4 className="my-auto text-[0.6rem] md:flex hidden sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] uppercase text-[#707070] col-start-5 col-end-7">
          Phone Number
        </h4>
        <h4 className="my-auto uppercase text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#707070] flex items-center col-span-2  md:col-span-1 self-center">
          Products
        </h4>
        <h4 className="my-auto uppercase text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#707070] flex items-center">
          Total
        </h4>
        <div className="my-auto uppercase text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#707070] flex justify-center">
          <h4>Status</h4>
        </div>
      </div>

      {/* detail table */}
      {data.length > 0 && data.map((element) => <HistoryCard data={element} />)}
    </div>
  );
};

export default HistoryTable;
