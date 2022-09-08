import { Dropdown } from "flowbite-react";
import React, { useState } from "react";
import { Filter } from "../../components/BrowsePage/Filter";
import { RiArrowUpDownFill } from "react-icons/ri";
import { BsArrowDownUp, BsFilterCircle } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import FilterCard from "../../components/BrowsePage/FilterCard";
import { useSelector } from "react-redux";
import PaginationBrowse from "../../components/BrowsePage/PaginationBrowse";
import { useEffect } from "react";
import Axios from "../../configs/axiosConfig";
const Browse = () => {
  const { pagination } = useSelector((state) => state.pagination);
  const [open, setOpen] = useState(false);
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await Axios.get("https://fakestoreapi.com/products");

      if (response) {
        setProduct(response.data);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="w-screen h-screen mt-[75px] ">
      <main className="flex flex-col sm:flex-row h-full">
        <div
          className={`sm:bg-white relative transition-[bottom] duration-300  ${
            !open ? "bottom-96 h-0 opacity-0" : "bottom-0"
          } sm:block sm:opacity-100 sm:h-full sm:flex-grow sm:bottom-0 bg-gray-50`}
        >
          <Filter />
        </div>
        <section className="flex flex-col w-full">
          <div className="flex justify-between ml-6 lg:mr-40 items-center p-2 mr-3 md:mr-0">
            <p className="text-xl font-semibold">Results: 123</p>
            <div className="block sm:hidden ml-auto mr-4">
              <BsFilterCircle
                className="text-4xl"
                onClick={() => setOpen(!open)}
              />
            </div>
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

          <div className="flex flex-col mt-7">
            <section className="flex mx-5 flex-wrap gap-2 justify-center sm:justify-start mb-7">
              <FilterCard />
              <FilterCard />
              <FilterCard />
              <FilterCard />
              <FilterCard />
              <FilterCard />
              <FilterCard />
              <FilterCard />
              <FilterCard />
              <FilterCard />
              <FilterCard />
              <FilterCard />
            </section>
            <div className="mt-auto mb-4">
              {products.length > 0 && <PaginationBrowse data={products} />}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Browse;
