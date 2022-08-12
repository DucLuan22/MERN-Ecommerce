import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalForm from "../../components/ModalForm";
import SlidebarShade from "../../components/SlidebarShade";
import TableComponent from "../../components/TableComponent";
import { Button } from "flowbite-react";
import {
  addProduct,
  getProducts,
  updateProducts,
} from "../../features/admin/productSlice";
import { openModal } from "../../features/admin/adminModalSlide";
import UpdateModalForm from "../../components/UpdateModalForm";
const ProductAdminPage = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const { isLoading, errorMessage } = useSelector((state) => state.product);
  const products = useSelector((state) => state.product.products);

  const ProductModal = {
    title: "Product",
    add: function (data) {
      dispatch(addProduct(data));
    },
    get: function () {
      dispatch(getProducts());
    },
    put: function () {
      dispatch(updateProducts());
    },
    fields: [
      { name: "name", label: "Product Name", type: "text" },
      { name: "price", label: "Price", type: "number", min: 0 },
      { name: "category", label: "Category", type: "select" },
      { name: "brand", label: "Brand", type: "select" },
      { name: "stock", label: "Stock", type: "number", min: 0 },
    ],
  };

  const ProductTable = {
    headers: ["Image", "Product Name", "stock", "category", "brand", "price"],
    products,
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="ml-24 w-full h-full">
      <div className="flex justify-center my-4">
        <Button
          className="mx-auto"
          color="dark"
          onClick={() => dispatch(openModal())}
        >
          Add Product
        </Button>
      </div>
      <SlidebarShade />
      <ModalForm dataModal={ProductModal} />
      <UpdateModalForm dataModal={ProductModal} />
      <TableComponent
        tableHeaders={ProductTable.headers}
        tableData={products}
      />
    </div>
  );
};

export default ProductAdminPage;
