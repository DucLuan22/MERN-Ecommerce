import React from "react";
import { Link } from "react-router-dom";
function FilterCard() {
  return (
    <Link to="/">
      <article className="text-center">
        <img
          src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/06/laptop-lam-viec-tu-xa-696x414.jpg?fit=700%2C20000&quality=95&ssl=1g"
          alt=""
          className="w-[300px]"
        />
        <h1 className="text-xl font-semibold">Laptop Lenovo V15</h1>
        <p className="text-lg text-gray-600">$1250.5</p>
      </article>
    </Link>
  );
}

export default FilterCard;
