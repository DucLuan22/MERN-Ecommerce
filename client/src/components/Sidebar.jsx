import React from "react";
import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubMenu] = useState(false);
  const Menus = [
    { title: "Dashboard" },
    { title: "Page" },
    { title: "Media", spacing: true },
    {
      title: "Management",
      submenu: true,
      submenuItems: [
        { title: "Categories" },
        { title: "Products" },
        { title: "Brands" },
        { title: "Orders" },
      ],
    },
    { title: "Analytics" },
    { title: "Inbox", spacing: true },
    { title: "Settings" },
    { title: "Logout" },
  ];
  return (
    <>
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 relative duration-500 ${
          open ? "w-72" : "w-20"
        }  `}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border-[1px] border-dark-purple ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
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
                <span className="text-2xl block float-left">
                  <RiDashboardFill />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && " hidden"
                  }`}
                >
                  {item.title}
                </span>
                {item.submenu && open && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-[180deg]"}`}
                    onClick={() => {
                      setSubMenu(!submenuOpen);
                    }}
                  />
                )}
              </li>
              {item.submenu && submenuOpen && open && (
                <ul className="duration-200">
                  {item.submenuItems.map((submenuItem, index) => {
                    return (
                      <li
                        key={index}
                        className={`text-gray-300 text-sm px-5 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${
                          item.spacing ? "mt-9" : "mt-2"
                        }`}
                      >
                        {submenuItem.title}
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
