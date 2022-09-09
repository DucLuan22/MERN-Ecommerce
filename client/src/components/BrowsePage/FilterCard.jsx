import React from "react";
import { Link } from "react-router-dom";
function FilterCard({ data }) {
  return (
    <Link to="/">
      <article className="text-center flex flex-col justify-center">
        <img
          src={data.image}
          alt=""
          className="w-[250px] sm:w-[200px] md:w-[230px] lg:w-[300px] h-[250px]"
        />
        <h1 className="text-xl font-semibold w-[200px] mx-auto">
          {data.title.substring(0, 25) + " ... "}
        </h1>
        <p className="text-lg text-gray-600">${data.price}</p>
      </article>
    </Link>
  );
}

export default FilterCard;
