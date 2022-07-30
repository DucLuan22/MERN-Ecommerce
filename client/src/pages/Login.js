import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import ReactTooltip from "react-tooltip";

function Login() {
  const [isUser, setIsUser] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [toolTip, showToolTip] = useState(true);
  const showUserForm = () => {
    setIsUser(true);
    setIsAdmin(false);
  };
  const showAdminForm = () => {
    setIsUser(false);
    setIsAdmin(true);
  };
  return (
    <div className="bg-neutral-200 w-screen h-screen flex justify-center items-center">
      <form action="" className="w-[500px] h-[450px] bg-white rounded-xl">
        <h1 className="text-center text-3xl font-bold my-5">
          {isUser ? "User Login" : "Admin Login"}
        </h1>
        <div>
          <h2 className="text-center text-[#797777] font-semibold text-xl">
            Account Type:
          </h2>
          <div className="flex max-w-[50%] mx-auto justify-center gap-7 mt-2">
            <a data-tip data-for="user">
              <AiOutlineUser
                className="text-5xl cursor-pointer"
                onClick={() => showUserForm()}
                onMouseEnter={() => showToolTip(true)}
                onMouseLeave={() => {
                  showToolTip(false);
                  setTimeout(() => showToolTip(true), 50);
                }}
              />
            </a>
            {toolTip && (
              <ReactTooltip id="user" type="dark" effect="solid">
                <span>User Account</span>
              </ReactTooltip>
            )}

            <a
              data-tip
              data-for="admin"
              onMouseEnter={() => showToolTip(true)}
              onMouseLeave={() => {
                showToolTip(false);
                setTimeout(() => showToolTip(true), 20);
              }}
            >
              <MdAdminPanelSettings
                className="text-5xl cursor-pointer"
                onClick={() => {
                  showAdminForm();
                }}
              />
            </a>
            {toolTip && (
              <ReactTooltip id="admin" type="dark" effect="solid">
                <span>Admin Account</span>
              </ReactTooltip>
            )}
          </div>
        </div>
        <div className="flex flex-col w-[85%] m-auto">
          <div className="flex flex-col gap-y-3">
            <label htmlFor="email" className="font-semibold text-lg">
              Email
              <sup className="text-red-700 text font-bold">*</sup>
            </label>
            <input
              type="email"
              className="border-[1px] border-gray-400 h-8 rounded-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
