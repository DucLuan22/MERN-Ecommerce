import { Dropdown } from "flowbite-react";
import React from "react";
import { Filter } from "../../components/BrowsePage/Filter";
import { RiArrowUpDownFill } from "react-icons/ri";
import { BsArrowDownUp } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import FilterCard from "../../components/BrowsePage/FilterCard";
import { useSelector } from "react-redux";
import PaginationBrowse from "../../components/BrowsePage/PaginationBrowse";
const Browse = () => {
  const { products } = useSelector((state) => state.product);
  return (
    <div className="w-screen h-screen mt-[75px] ">
      <main className="flex h-full">
        <Filter />
        <section className="flex flex-col w-full">
          <div className="flex justify-between ml-6 lg:mr-40 items-center p-2">
            <p className="text-xl font-semibold">Results: 123</p>
            <div>
              <Dropdown label="Sorting" color="light">
                <Dropdown.Item>
                  <div className="flex items-center gap-2">
                    <RiArrowUpDownFill className="text-xl" />
                    Sort by Highest Price
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="flex items-center gap-2">
                    <BsArrowDownUp className="text-lg font-bold" />
                    Sort by Lowest Price
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="flex items-center gap-2">
                    <AiFillCalendar className="text-lg font-bold" />
                    Sort by Date
                  </div>
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
          <hr />

          <div className="flex flex-col mt-7 flex-wrap flex-grow">
            <section>s</section>
            <div className="mt-auto mb-4">
              <PaginationBrowse data={products} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Browse;
