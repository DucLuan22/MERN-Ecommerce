import React, { useState } from "react";
import { Button, Modal, Label, Textarea, Select } from "flowbite-react";
import { AiFillStar } from "react-icons/ai";
const ReviewModal = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button onClick={openModal} color="dark">
        Write a review
      </Button>
      <Modal show={open} size="2xl" popup={true} onClose={closeModal}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Write a Review
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="rating" value="Rating:" />
              </div>
              <Select required={true}>
                <option className="p-2" value={5}>
                  5.0 ★★★★★
                </option>
                <option className="p-2" value={4}>
                  4.0 ★★★★
                </option>
                <option className="p-2" value={3}>
                  3.0 ★★★
                </option>
                <option className="p-2" value={2}>
                  2.0 ★★
                </option>
                <option className="p-2" value={1}>
                  1.0 ★
                </option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Review:" />
              </div>
              <Textarea
                rows={6}
                required={true}
                placeholder="Leave a comment..."
              />
            </div>
            <div className="flex">
              <span className="ml-auto">
                <Button color="dark">Submit</Button>
              </span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ReviewModal;
