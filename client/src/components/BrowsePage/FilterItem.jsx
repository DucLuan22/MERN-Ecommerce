import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../features/admin/productSlice";

function FilterItem({ data }) {
  const [productNum, setProductNum] = useState(0);
  const [items, setItems] = useState([]);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data?._id !== undefined && products.length > 0) {
      const filtered = products.filter(
        (product) => product.category !== data._id
      );
      setProductNum(filtered.length);
      dispatch(setProducts(filtered));
    }
  }, [products, data]);
  return (
    <li
      className="text-lg py-1 px-2 text-[#5e5d5d] hover:text-white hover:bg-black rounded-lg flex justify-between font-semibold transition-all duration-500"
      onCick={""}
    >
      <span>{data?.name}</span>
      <span>{productNum}</span>
    </li>
  );
}

export default FilterItem;
