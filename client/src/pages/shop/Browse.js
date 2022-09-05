import React from "react";
import { BiFilter } from "react-icons/bi";
import { Filter } from "../../components/BrowsePage/Filter";
const Browse = () => {
  return (
    <div className="w-screen h-screen mt-[75px] ">
      <main className="grid-cols-10 grid h-full">
        <Filter />
        <section className="lg:col-span-7"></section>
      </main>
    </div>
  );
};

export default Browse;
