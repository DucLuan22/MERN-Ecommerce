import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/admin/adminModalSlide";
import { Modal, Button } from "flowbite-react";
import { useState } from "react";
import ModalTextField from "./ModalTextField";
import ModalSelectField from "./ModalSelectField";

function ModalForm({ dataModal }) {
  const [data, setData] = useState({});
  const { open } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const submitHandling = async (e) => {
    e.preventDefault();
    await dataModal.add(data);
  };
  return (
    <>
      <Modal
        show={open}
        onClose={() => dispatch(closeModal())}
        className="fixed"
      >
        <Modal.Header>Add Category</Modal.Header>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => submitHandling(e)}
        >
          <Modal.Body>
            {dataModal.fields.map((field, index) => {
              if (field.type === "text") {
                return (
                  <ModalTextField key={index} {...field} setData={setData} />
                );
              }
              if (field.type === "select") {
                return (
                  <ModalSelectField {...field} setData={setData} key={index} />
                );
              }
              if (field.type === "number") {
                return (
                  <ModalTextField key={index} {...field} setData={setData} />
                );
              }
              return <React.Fragment key={index} />;
            })}
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
