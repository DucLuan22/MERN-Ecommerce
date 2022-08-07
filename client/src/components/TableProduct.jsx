import React from "react";
import { Table, Button } from "flowbite-react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
const TableProduct = () => {
  return (
    <Table className="font-bold" hoverable={true}>
      <Table.Head>
        <Table.HeadCell>Image</Table.HeadCell>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Stock</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Brand</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Action</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>img</Table.Cell>
          <Table.Cell className=" font-medium text-gray-900 dark:text-white">
            Apple MacBook Pro 17"
          </Table.Cell>
          <Table.Cell>123</Table.Cell>
          <Table.Cell>Laptop</Table.Cell>
          <Table.Cell>Apple</Table.Cell>
          <Table.Cell>$2999</Table.Cell>
          <Table.Cell className="flex gap-1">
            <Button color="dark">
              <AiOutlineEdit className="text-xl" />
            </Button>
            <Button color="failure" className="inline">
              <AiOutlineDelete className="text-xl" />
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default TableProduct;
