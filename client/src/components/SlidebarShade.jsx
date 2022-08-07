import React from "react";
import { useSelector } from "react-redux";
const SlidebarShade = () => {
  const { open } = useSelector((state) => state.sidebar);
  return (
    <div
      className={`z-10 ${
        open ? "opacity-60 bg-black w-full h-full fixed" : "hidden"
      }`}
    ></div>
  );
};

export default SlidebarShade;
