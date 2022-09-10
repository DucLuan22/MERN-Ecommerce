import React from "react";
import { Link } from "react-router-dom";
function FilterCard({ data }) {
  return (
    <Link to="/">
      <article className="text-center flex flex-col justify-center">
        <img
          src={require(`../../Images/${data.img}`)}
          alt=""
          className="w-[250px] sm:w-[200px] md:w-[230px] lg:w-[300px] h-[250px]"
        />
        <h1 className="text-xl font-semibold w-[200px] mx-auto">
          {+data.name.length >= 25
            ? data.name.substring(0, 25) + "..."
            : data.name}
        </h1>
        <p className="text-lg text-gray-600">${data.price}</p>
      </article>
    </Link>
  );
}

export default FilterCard;
