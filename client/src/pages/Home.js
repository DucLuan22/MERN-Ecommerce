import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import Axios from "../configs/axiosConfig";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      setData(data);
    };
    fetchData();
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

          <Pagination data={data} />
        </div>
      </section>
    </main>
  );
};

export default Home;
