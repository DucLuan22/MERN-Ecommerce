import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalForm from "../../components/ModalForm";
import SlidebarShade from "../../components/SlidebarShade";
import TableComponent from "../../components/TableComponent";
import {
  addProduct,
  getProducts,
  updateProducts,
} from "../../features/admin/productSlice";
import UpdateModalForm from "../../components/UpdateModalForm";
const ProductAdminPage = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { isLoading, errorMessage } = useSelector((state) => state.product);

  const products = useSelector((state) => state.product.products);

  const { updateData } = useSelector((state) => state.modal);

  const ProductModal = {
    title: "Product",
    add: function (data) {
      dispatch(addProduct(data));
    },
    get: function () {
      dispatch(getProducts());
    },
    update: function (data) {
      dispatch(updateProducts(data));
    },
    fields: [
      {
        name: "name",
        label: "Product Name",
        type: "text",
        valueData: updateData?.name,
      },
      {
        name: "price",
        label: "Price",
        type: "number",
        min: 0,
        valueData: updateData?.price,
      },
      {
        name: "category",
        label: "Category",
        type: "select",
        valueData: updateData?.category,
      },
      {
        name: "brand",
        label: "Brand",
        type: "select",
        valueData: updateData?.brand,
      },
      {
        name: "stock",
        label: "Stock",
        type: "number",
        min: 0,
        valueData: updateData?.stock,
      },
    ],
  };

  const ProductTable = [
    "Image",
    "Product Name",
    "stock",
    "category",
    "brand",
    "price",
  ];

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="ml-24 w-full h-full">
      <SlidebarShade />
      <ModalForm dataModal={ProductModal} />
      <UpdateModalForm dataModal={ProductModal} />
      <TableComponent
        tableHeaders={ProductTable}
        tableData={products}
        tableType={"product"}
      />
    </div>
  );
};

export default ProductAdminPage;
