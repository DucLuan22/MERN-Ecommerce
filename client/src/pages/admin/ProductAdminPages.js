import React from "react";
import { useDispatch } from "react-redux";
import ModalForm from "../../components/ModalForm";
import SlidebarShade from "../../components/SlidebarShade";
import TableProduct from "../../components/TableProduct";
import { addProduct } from "../../features/admin/productSlice";
const ProductAdminPage = () => {
  const dispatch = useDispatch();
  const ProductModal = {
    title: "Product",
    add: function (data) {
      dispatch(addProduct(data));
    },
    fields: [
      { name: "name", label: "Product Name", type: "text" },
      { name: "price", label: "Price", type: "text" },
      { name: "category", label: "Category", type: "select" },
      { name: "brand", label: "Brand", type: "select" },
      { name: "stock", label: "Stock", type: "number" },
    ],
  };
  return (
    <div className="ml-24 w-full h-full">
      <SlidebarShade />
      <ModalForm data={ProductModal} />
      <TableProduct />
    </div>
  );
};

export default ProductAdminPage;
