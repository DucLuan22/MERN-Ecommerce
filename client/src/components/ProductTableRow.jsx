import React from "react";
import { Button, Table } from "flowbite-react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteProducts } from "../features/admin/productSlice";
import { openUpdateModal } from "../features/admin/adminModalSlide";
const ProductTableRow = ({ data }) => {
  const dispatch = useDispatch();
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
      <Table.Cell>{data.category}</Table.Cell>
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
