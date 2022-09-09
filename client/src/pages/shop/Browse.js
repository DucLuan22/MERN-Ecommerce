import { Dropdown } from "flowbite-react";
import React, { useRef, useState } from "react";
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
  const { items } = useSelector((state) => state.pagination);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current === false) {
      const fetchProducts = async () => {
        const response = await Axios.get("https://fakestoreapi.com/products");

        if (response) {
          setProducts(response.data);
        }
      };
      fetchProducts();

      return () => (ref.current = true);
    }
  }, []);

  const handleHighestSort = () => {
    const filtered = products.sort((a, b) => b.price - a.price);
    setProducts([...filtered]);
  };

  const handleLowestSort = () => {
    const filtered = products.sort((a, b) => a.price - b.price);
    setProducts([...filtered]);
  };
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
                <Dropdown.Item onClick={handleHighestSort}>
                  <div className="flex items-center gap-2">
                    <RiArrowUpDownFill className="text-xl" />
                    Sort by Highest Price
                  </div>
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLowestSort}>
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
            <section className="flex mx-5 flex-wrap md:gap-6 gap-3 lg:gap-8 justify-center sm:justify-start mb-7">
              {products.length > 0 &&
                items.map((product) => (
                  <FilterCard data={product} key={product.id} />
                ))}
            </section>
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
