import React from "react";
import { Breadcrumb, TextInput, Select, Button, Radio } from "flowbite-react";
import { HiHome, HiPhone, HiMail, HiOutlineArrowRight } from "react-icons/hi";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import CheckoutCard from "../../components/Store/CheckoutCard";
function CheckOut() {
  return (
    <div className="mt-20 mx-3 md:mx-10 lg:mx-36">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Cart</Breadcrumb.Item>
        <Breadcrumb.Item>Checkout</Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex  md:gap-x-10 lg:gap-x-20">
        <section className="mt-5 ">
          <h1 className="font-semibold text-xl">Billing Address</h1>
          <div className="grid grid-cols-3 gap-4 mt-3 w-full md:w-[500px] lg:w-[800px]">
            <div>
              <TextInput type="text" placeholder="First Name" required={true} />
            </div>

            <div className="col-span-2">
              <TextInput type="text" placeholder="Last Name" required={true} />
            </div>

            <div className="col-span-3">
              <TextInput
                type="email"
                placeholder="Email"
                required={true}
                addon={<HiMail />}
              />
            </div>
            <div className="col-span-3">
              <TextInput
                type="text"
                placeholder="Phone number"
                required={true}
                addon={<HiPhone />}
              />
            </div>

            <div className="col-span-3">
              <TextInput type="text" placeholder="Address" required={true} />
            </div>

            <div>
              <Select required={true}>
                <option selected>Select city</option>
              </Select>
            </div>
            <div>
              <Select required={true}>
                <option selected>Select district</option>
              </Select>
            </div>
            <div>
              <Select required={true}>
                <option selected>Select ward</option>
              </Select>
            </div>
          </div>
          <h1 className="font-semibold text-xl mt-2">Payment</h1>

          <div className="grid grid-cols-3 gap-4 w-full md:w-[500px] lg:w-[800px]">
            <div className="flex gap-2 items-center">
              <Radio
                id="united-state"
                name="payment"
                value="USA"
                defaultChecked={true}
              />
              <FaCcMastercard className="text-4xl text-slate-500" />
            </div>
            <div className="flex gap-2 items-center">
              <Radio
                id="united-state"
                name="payment"
                value="USA"
                defaultChecked={true}
              />
              <RiVisaFill className="text-5xl text-slate-500" />
            </div>
            <div className="col-span-2">
              <TextInput
                type="text"
                placeholder="Card Number"
                required={true}
              />
            </div>
            <div className="col-span-1">
              <TextInput type="text" placeholder="CCV" required={true} />
            </div>
          </div>
          <div className="mt-4">
            <Button color="gray" className="w-">
              Checkout <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <section className="mt-5 border-[1px] border-black rounded-sm md:w-[450px] h-[550px]">
          <div className="text-center">
            <h1 className="font-semibold text-2xl my-4">Order Summary</h1>
          </div>
          <hr className="mx-4 border-t-[1px] border-gray-300" />
          <article className="h-[300px] overflow-auto mx-3 mt-4">
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
            <CheckoutCard />
          </article>
          <hr className="mx-4 my-5 border-t-[1px] border-gray-300" />

          <div className="flex-col mx-4 text-xl font-semibold">
            <div className="flex justify-between mb-3">
              <p>Shipping: </p>
              <p>Free</p>
            </div>
            <p>Total: $3000</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CheckOut;
