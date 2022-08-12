import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../features/admin/adminModalSlide";
import { Modal, Button, Spinner } from "flowbite-react";
import { useState } from "react";
import ModalTextField from "./ModalTextField";
import ModalSelectField from "./ModalSelectField";

function ModalForm({ dataModal }) {
  const [data, setData] = useState({});
  const { isLoading } = useSelector((state) => state.product);
  const { open } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  console.log(data);
  const submitHandling = async (e) => {
    e.preventDefault();
    await dataModal.add(data);
    setData({});
  };
  return (
    <>
      <div className="flex justify-center my-4">
        <Button
          className="mx-auto"
          color="dark"
          onClick={() => dispatch(openModal())}
        >
          Add {dataModal.title}
        </Button>
      </div>
      <Modal
        show={open}
        onClose={() => dispatch(closeModal())}
        className="fixed"
      >
        <Modal.Header>Add {dataModal.title}</Modal.Header>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => submitHandling(e)}
        >
          <Modal.Body>
            {isLoading && (
              <Spinner aria-label="Extra small spinner example" size="xs" />
            )}
            {!isLoading &&
              dataModal.fields.map((field, index) => {
                if (field.type === "text") {
                  return (
                    <ModalTextField key={index} {...field} setData={setData} />
                  );
                }
                if (field.type === "select") {
                  return (
                    <ModalSelectField
                      {...field}
                      setData={setData}
                      key={index}
                    />
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
