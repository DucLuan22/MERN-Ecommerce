import React from "react";
import FilterItem from "./FilterItem";
import {} from "flowbite-react";
export const Filter = () => {
  return (
    <section className="sm:col-span-3 lg:col-span-2 border-r-[1px] border-r-[#888888] w-[300px]">
      <h1 className=" text-2xl font-bold text-[#252121] tracking-widest px-2 py-[13px]">
        Filter
      </h1>
      <hr />
      <div className="mt-2 mx-3">
        <h2 className="text-lg font-bold text-[#252121]">Category</h2>
        <ul className="flex flex-col gap-1">
          <FilterItem />
          <FilterItem />
          <FilterItem />
        </ul>
      </div>
      <div className="mt-2 mx-3">
        <h2 className="text-lg font-bold text-[#252121]">Brand</h2>
        <ul className="flex flex-col gap-1">
          <FilterItem />
          <FilterItem />
          <FilterItem />
        </ul>
      </div>
    </section>
  );
};
