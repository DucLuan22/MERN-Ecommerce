import React from "react";
import FilterItem from "./FilterItem";
import {} from "flowbite-react";
export const Filter = () => {
  return (
    <section className="h-[300px] sm:overflow-y-visible sm:col-span-3 lg:col-span-2 w-full sm:w-[200px] md:w-[250px] lg:w-[300px] overflow-y-auto">
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
