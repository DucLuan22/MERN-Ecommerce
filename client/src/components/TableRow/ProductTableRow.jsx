import React from "react";
import { Button, Table } from "flowbite-react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { openUpdateModal } from "../../features/admin/adminModalSlide";
import { deleteProducts } from "../../features/admin/productSlice";
import { useEffect } from "react";
import { getCategory } from "../../features/admin/categorySlice";

const ProductTableRow = ({ data }) => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategory(data.category));
  }, [dispatch]);
  const deleteHandler = (id) => {
    dispatch(deleteProducts(id));
  };
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>{data.img}</Table.Cell>
      <Table.Cell className=" font-medium text-gray-900 dark:text-white">
        {data.name}
      </Table.Cell>
      <Table.Cell>{data.stock}</Table.Cell>
      <Table.Cell>{category.data.name}</Table.Cell>
      <Table.Cell>{data.brand}</Table.Cell>
      <Table.Cell>{data.price}</Table.Cell>
      <Table.Cell className="flex gap-1">
        <Button color="dark">
          <AiOutlineEdit
            className="text-xl"
            onClick={() => dispatch(openUpdateModal(data))}
          />
        </Button>
        <Button
          color="failure"
          className="inline"
          onClick={() => deleteHandler(data._id)}
        >
          <AiOutlineDelete className="text-xl" />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default ProductTableRow;
