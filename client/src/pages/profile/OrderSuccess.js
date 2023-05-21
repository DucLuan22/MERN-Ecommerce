import React from "react";
import { BiCheck } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function OrderSuccess() {
  const navigate = useNavigate();

  const handleCheckOrder = () => {
    navigate("/history");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-[#4A99D3] w-screen h-screen flex flex-col items-center pt-28">
      <BiCheck className="text-white text-[300px] font-bold" />
      <h1 className="text-3xl text-white font-bold mt-[-50px]">
        Payment Successful
      </h1>
      <div className="mt-10 flex gap-5 font-bold">
        <button
          className="bg-white text-[#4A99D3] p-3 w-[300px] rounded-lg"
          onClick={handleHome}
        >
          RETURN TO HOMEPAGE
        </button>
        <button
          className="bg-white text-[#4A99D3] w-[280px] rounded-lg"
          onClick={handleCheckOrder}
        >
          CHECK YOUR ORDER
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;
