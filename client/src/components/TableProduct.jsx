import React from "react";
import { Table } from "flowbite-react";
import ProductTableRow from "./ProductTableRow";
const TableProduct = ({ tableData, tableHeaders }) => {
  return (
    <Table className="font-bold" hoverable={true}>
      <Table.Head>
        {tableHeaders.map((header, index) => (
          <Table.HeadCell key={index}>{header}</Table.HeadCell>
        ))}
        <Table.HeadCell>
          <span className="sr-only">Action</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {tableData.length !== 0 &&
          tableData.map((row) => <ProductTableRow {...row} />)}
      </Table.Body>
    </Table>
  );
};

export default TableProduct;
