import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity <= 1) {
      return quantity;
    }
    setQuantity(quantity - 1);
  };
  return (
    <tr className="font-['Nunito']">
      <th className="flex my-5 ">
        <img
          className="w-36 object-contain"
          src="https://surfacecu.com.vn/wp-content/uploads/2021/04/surface-laptop-go-02.jpg"
          alt="itemname"
        />
        <div className="flex flex-col gap-y-3">
          <label className="text-[#3A3A3A]" htmlFor="itemName">
            Laptop Go Intelsdafasdfafasdfs dsafasdfsadfasdfdsa dasfdsafsadfdsafa
          </label>
          <a className="text-[#AAAAAA] w-4" href="http://localhost:3000/cart">
            Remove
          </a>
        </div>
      </th>
      <th className="hidden md:table-cell">
        <div className="flex justify-center items-center mb-9 gap-3 ">
          <i>
            <AiOutlinePlus onClick={() => increment()} />
          </i>
          <input
            type="number"
            min={1}
            value={quantity}
            className="[appearance:textfield] border-[1px] border-gray-500 rounded-xl w-16 h-11 text-center"
          />
          <i>
            <AiOutlineMinus onClick={() => decrement()} />
          </i>
        </div>
      </th>
      <th className="hidden md:table-cell">
        <h3 className="mb-9">$12345</h3>
      </th>
      <th className="hidden md:table-cell">
        <h3 className="mb-9">$12345</h3>
      </th>
    </tr>
  );
};

export default CartItem;
