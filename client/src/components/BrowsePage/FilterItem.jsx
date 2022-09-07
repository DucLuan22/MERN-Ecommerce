import React from "react";

function FilterItem({ data }) {
  return (
    <li className="text-lg py-1 px-2 text-[#5e5d5d] hover:text-white hover:bg-black rounded-lg flex justify-between font-semibold transition-all duration-500">
      <span>Test</span>
      <span>12</span>
    </li>
  );
}

export default FilterItem;
