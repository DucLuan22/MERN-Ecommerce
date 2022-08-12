import React from "react";
import { Table } from "flowbite-react";
import ProductTableRow from "./ProductTableRow";
const TableComponent = ({ tableData, tableHeaders }) => {
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
        {tableData &&
          tableData.map((row) => <ProductTableRow key={row._id} data={row} />)}
      </Table.Body>
    </Table>
  );
};

export default TableComponent;
