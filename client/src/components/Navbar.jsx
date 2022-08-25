import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Avatar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { reset } from "../features/auth/authSlice";
import { useRef } from "react";
import { getProducts } from "../features/admin/productSlice";
import { setCart, setTotal, setTotalAmount } from "../features/shop/cartSlice";

function Navbar() {
  const [isDrop, setIsDrop] = useState(false);
  const effectRan = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loggedUser, isLoading } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const { totalQuantity, cart, totalAmount } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    if (effectRan.current === false) {
      const fetchData = async () => {
        const products = await dispatch(getProducts()).unwrap();
        if (typeof products !== "undefined") {
          for (const x of loggedUser.cart) {
            for (const y of products.data) {
              if (x.product_id === y._id) {
                setData((old) => [
                  ...old,
                  {
                    name: y.name,
                    price: y.price,
                    img: y.img,
                    quantity: x.quantity,
                    _id: x.product_id,
                  },
                ]);
              }
            }
          }
        }
      };
      fetchData();
      return () => {
        effectRan.current = true;
      };
    }
    if (data.length !== 0) {
      dispatch(setCart(data));
    }
  }, [dispatch, loggedUser.cart, data]);

  useEffect(() => {
    if (cart.length > 0) {
      dispatch(setTotal());
      dispatch(setTotalAmount());
    }
  }, [dispatch, cart]);

  return (
    <nav className="shadow-md w-screen fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-around bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-3xl cursor-pointer flex items-center text-gray-800">
          Luan
        </div>
        <div className="text-3xl absolute right-8 top-6 md:hidden">
          <AiOutlineMenu onClick={() => setIsDrop(!isDrop)} />
        </div>
        <ul
          className={`text-gray-800 md:flex md:items-center link-list gap-8 font-semibold text-xl md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full 
        md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          isDrop ? "top-20" : "top-[-490px]"
        }`}
        >
          <li className="hover:text-gray-500 duration-500 my-7 md:my-0">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-500 duration-500 my-7 md:my-0">
            Brand
          </li>
          <li className="hover:text-gray-500 duration-500 my-7 md:my-0">
            Categories
          </li>
          <li className="hover:text-gray-500 duration-500 my-7 md:my-0 relative">
            <Link to="/cart">
              <AiOutlineShoppingCart className="inline text-2xl" />
            </Link>
            <span className="bg-gray-800 text-white absolute cart-notify bottom-4 left-3 text-sm px-[7px] p-[1px] font-bold">
              {!isLoading && totalQuantity > 0 ? totalQuantity : 0}
            </span>
          </li>
          {localStorage.getItem("authToken") ? (
            <Dropdown
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
              arrowIcon={false}
              inline={true}
            >
              <Dropdown.Header>
                <span className="block text-sm">{loggedUser.username}</span>
                <span className="block truncate text-sm font-medium">
                  {loggedUser.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Wishlist</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  localStorage.removeItem("authToken");
                  navigate("auth/login/");
                  dispatch(reset());
                }}
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <button className="bg-gray-900 text-white py-2 px-6 font-semibold rounded md:ml-8 hover:bg-slate-700 duration-500">
              <Link to="/auth/login">Login</Link>
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
