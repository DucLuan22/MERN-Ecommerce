import React from "react";
import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown, BsFillBagFill } from "react-icons/bs";
import {
  AiFillEnvironment,
  AiFillShopping,
  AiOutlineSetting,
  AiOutlineInbox,
} from "react-icons/ai";
import { FaPager } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openSidebar, openSubMenu } from "../features/admin/adminSidebarSlice";

const Sidebar = () => {
  const { open, openSubMenuItem } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const [submenuOpen, setSubMenu] = useState(false);
  const Menus = [
    {
      title: "Dashboard",
      icon: <BsFillBagFill />,
      to: "/admin/dashboard",
    },
    {
      title: "Page",
      icon: <FaPager />,
      to: "#",
    },
    {
      title: "Media",
      spacing: true,
      icon: <AiFillShopping />,
      to: "#",
    },
    {
      title: "Management",
      submenu: true,
      icon: <MdManageAccounts />,
      to: "#",
      submenuItems: [
        { title: "Categories", to: "/admin/category" },
        { title: "Products", to: "/admin/product" },
        { title: "Brand", to: "/admin/brand" },
        { title: "Orders", to: "/admin/dashboard" },
      ],
    },
    { title: "Analytics", to: "#", icon: <SiSimpleanalytics /> },
    { title: "Inbox", spacing: true, to: "#", icon: <AiOutlineInbox /> },
    { title: "Settings", to: "#", icon: <AiOutlineSetting /> },
    { title: "Logout", to: "#", icon: <IoLogOutOutline /> },
  ];
  return (
    <>
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 absolute z-10 float-left duration-500 ${
          open ? "w-72" : "w-20"
        }  `}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border-[1px] border-dark-purple ${
            !open && "rotate-180"
          }`}
          onClick={() => dispatch(openSidebar())}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 duration-500 text-4xl rounded cursor-pointer block float-left mr-2 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Luan
          </h1>
        </div>
        <ul>
          {Menus.map((item, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${
                  item.spacing ? "mt-9" : "mt-2"
                }`}
              >
                <span className="text-2xl block float-left">{item.icon}</span>
                <Link
                  className={`text-base font-medium flex-1 duration-200 origin-left ${
                    !open && "scale-0"
                  }`}
                  to={item.to}
                  onClick={item.submenu ? () => dispatch(openSubMenu()) : ""}
                >
                  {item.title}
                </Link>
                {item.submenu && open && (
                  <BsChevronDown
                    className={`${openSubMenuItem && "rotate-[180deg]"}`}
                    onClick={() => {
                      dispatch(openSubMenu());
                    }}
                  />
                )}
              </li>
              {item.submenu && openSubMenuItem && open && (
                <ul className={`duration-500`}>
                  {item.submenuItems.map((submenuItem, index) => {
                    return (
                      <li
                        key={index}
                        className={`text-gray-300 text-sm px-5 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${
                          item.spacing ? "mt-9" : "mt-2"
                        }`}
                      >
                        <Link to={submenuItem.to}>{submenuItem.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
