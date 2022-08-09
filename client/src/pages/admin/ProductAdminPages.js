import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalForm from "../../components/ModalForm";
import SlidebarShade from "../../components/SlidebarShade";
import TableProduct from "../../components/TableProduct";
import { addProduct, getProducts } from "../../features/admin/productSlice";
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
    fields: [
      { name: "name", label: "Product Name", type: "text" },
      { name: "price", label: "Price", type: "text" },
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
      <SlidebarShade />
      <ModalForm dataModal={ProductModal} />
      <TableProduct tableHeaders={ProductTable.headers} tableData={products} />
    </div>
  );
};

export default ProductAdminPage;
