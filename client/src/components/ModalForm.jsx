import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../features/admin/adminModalSlide";
import { Modal, Button, Label, Select, TextInput } from "flowbite-react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { addProduct } from "../features/admin/productSlice";
import { useState } from "react";

function ModalForm({ data }) {
  const [product, setProduct] = useState({});
  const { open } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
    console.log(product);
  };

  return (
    <>
      <div className="flex justify-center my-4">
        <Button
          className="mx-auto"
          color="dark"
          onClick={() => dispatch(openModal())}
        >
          Add {data.title}
        </Button>
      </div>

      <Modal
        show={open}
        onClose={() => dispatch(closeModal())}
        className="fixed"
      >
        <Modal.Header>Add Category</Modal.Header>
        <form
          className="flex flex-col gap-4"
          onSubmit={() => dispatch(addProduct({ ...product }))}
        >
          <Modal.Body>
            {data.fields.map((field, index) => {
              if (field.type === "text") {
                return (
                  <div key={index}>
                    <div className="mb-2 block">
                      <Label value={field.label} className="text-xl" />
                    </div>
                    <TextInput
                      type="text"
                      placeholder={`Enter product ${field.name}`}
                      name={field.name}
                      required={true}
                      shadow={true}
                      onChange={onChangeHandler}
                    />
                  </div>
                );
              } else if (field.type === "select") {
                return (
                  <div key={index}>
                    <div className="mb-2 block">
                      <Label value="Select Category" />
                    </div>
                    <Select
                      name="category"
                      required={true}
                      onChange={onChangeHandler}
                    >
                      <option value={1}>United States</option>
                    </Select>
                  </div>
                );
              }
              return <></>;
            })}

            <div>
              <div className="mb-2 block">
                <Label value="Select Brand" />
              </div>
              <Select name="brand" required={true} onChange={onChangeHandler}>
                <option value={1}>United States</option>
                <option value={2}>Tstings</option>
              </Select>
            </div>

            <div>
              <div className="mb-2 block">
                <Label className="text-xl">Stock</Label>
              </div>
              <TextInput
                type="number"
                name="stock"
                placeholder="Enter Stock"
                required={true}
                shadow={true}
                onChange={onChangeHandler}
                min={1}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Add</Button>
            <Button color="gray" onClick={() => dispatch(closeModal())}>
              Cancel
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalForm;
