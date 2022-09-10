import React, { useEffect } from "react";
import FilterItem from "./FilterItem";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../features/admin/categorySlice";
export const Filter = () => {
  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <section className="h-[300px] sm:overflow-y-visible sm:col-span-3 lg:col-span-2 w-full sm:w-[200px] md:w-[250px] lg:w-[300px] overflow-y-auto">
      <h1 className=" text-2xl font-bold text-[#252121] tracking-widest px-2 py-[13px]">
        Filter
      </h1>
      <hr />
      <div className="mt-2 mx-3">
        <h2 className="text-lg font-bold text-[#252121]">Category</h2>
        <ul className="flex flex-col gap-1">
          {categories.length > 0 &&
            categories.map((category) => (
              <FilterItem data={category} key={category._id} />
            ))}
        </ul>
      </div>
      <div className="mt-2 mx-3">
        <h2 className="text-lg font-bold text-[#252121]">Brand</h2>
        <ul className="flex flex-col gap-1">
          <FilterItem />
          <FilterItem />
          <FilterItem />
        </ul>
      </div>
    </section>
  );
};
