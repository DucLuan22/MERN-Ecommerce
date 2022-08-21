import React from "react";
import { Button, Table } from "flowbite-react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { openUpdateModal } from "../../features/admin/adminModalSlide";
import { deleteProducts } from "../../features/admin/productSlice";
import { useEffect } from "react";
import { getCategory } from "../../features/admin/categorySlice";
import { getBrand } from "../../features/admin/brandSlice";

const ProductTableRow = ({ data }) => {
  const dispatch = useDispatch();
  const { category, isLoading } = useSelector((state) => state.category);
  const { brand } = useSelector((state) => state.brand);
  useEffect(() => {
    dispatch(getCategory(data.category));
    dispatch(getBrand(data.brand));
    // eslint-disable-next-line
  }, [dispatch, isLoading]);

  const deleteHandler = (id) => {
    dispatch(deleteProducts(id));
  };

  if (!category.data || !brand.data) {
    return <Table.Row></Table.Row>;
  }
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>
        <img
          src={require(`../../Images/${data.img}`)}
          alt={data.name}
          className="max-w-[120px]"
        ></img>
      </Table.Cell>
      <Table.Cell className=" font-medium text-gray-900 dark:text-white">
        {data.name}
      </Table.Cell>
      <Table.Cell>{data.stock}</Table.Cell>
      <Table.Cell>{category.data.name}</Table.Cell>
      <Table.Cell>{brand.data.name}</Table.Cell>
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
