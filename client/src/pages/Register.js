import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="bg-neutral-200 w-screen h-screen flex justify-center items-center">
      <form className="w-[500px] h-[500px] bg-white rounded-xl">
        <h1 className="text-center text-3xl font-bold my-5">Sign Up</h1>
        <div className="flex flex-col w-[85%] m-auto">
          <div className="flex flex-col gap-y-3">
            <label htmlFor="email" className="font-semibold text-lg">
              Email
              <sup className="text-red-700 text font-bold">*</sup>
            </label>

            <input
              type="email"
              className="border-[1px] border-gray-400 h-10 rounded-lg p-2"
              placeholder="Enter the email"
              required
            />
          </div>
          <div className="flex flex-col gap-y-3 mt-5">
            <label htmlFor="password" className="font-semibold text-lg">
              Password
              <sup className="text-red-700 text font-bold">*</sup>
            </label>

            <input
              type="password"
              className="border-[1px] border-gray-400 h-10 rounded-lg p-2"
              placeholder="Enter password"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex flex-col gap-y-3 mt-5">
            <label htmlFor="password" className="font-semibold text-lg">
              Confirm Password
              <sup className="text-red-700 text font-bold">*</sup>
            </label>

            <input
              type="password"
              className="border-[1px] border-gray-400 h-10 rounded-lg p-2"
              placeholder="Enter admin password"
              autoComplete="off"
              required
            />
          </div>
          <button className="bg- white border-2 border-black mt-7 p-2 font-bold rounded-xl hover:bg-slate-400 transition duration-200 ease-linear">
            Sign Up
          </button>

          <div className="mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Sign In
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
