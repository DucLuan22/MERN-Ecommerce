import React from "react";
import { Button, Table } from "flowbite-react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
const ProductTableRow = ({ name, price, stock, category, brand, img }) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>img</Table.Cell>
      <Table.Cell className=" font-medium text-gray-900 dark:text-white">
        {name}
      </Table.Cell>
      <Table.Cell>{stock}</Table.Cell>
      <Table.Cell>{category}</Table.Cell>
      <Table.Cell>{brand}</Table.Cell>
      <Table.Cell>{price}</Table.Cell>
      <Table.Cell className="flex gap-1">
        <Button color="dark">
          <AiOutlineEdit className="text-xl" />
        </Button>
        <Button color="failure" className="inline">
          <AiOutlineDelete className="text-xl" />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default ProductTableRow;
