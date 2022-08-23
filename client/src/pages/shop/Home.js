import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import { getProducts } from "../../features/admin/productSlice";
import { Spinner } from "flowbite-react";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <main className=" w-screen mt-21">
      {/* Slider */}
      <section className="text-center">
        <div className="flex h-[500px] md:h-[600px] md:w-4/5 shadow-lg rounded md:mx-auto my-3"></div>
      </section>
      {/* Product */}
      <section className="mt-10">
        <div className="text-center">
          <h1 className="font-bold text-4xl ">Products</h1>
          <hr className="w-[100px] border-t-black border-t-2 mx-auto" />

          {isLoading ? (
            <Spinner color="info" aria-label="Info spinner example" />
          ) : (
            <Pagination data={products} />
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
