import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../features/admin/productSlice";
function CustomerReview({ review }) {
  const { loggedUser } = useSelector((state) => state.auth);
  const { product_id } = useParams();
  const dispatch = useDispatch();
  const handleDelete = (user_id, review_id, product_id) => {
    dispatch(deleteReview({ user_id, review_id, product_id }));
  };
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 mx-2">
        <div className="shrink-0">
          <img
            className="h-8 w-8 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt="Bonnie image"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
            Anonymous
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {new Date(review?.createdAt).toUTCString()}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {review?.rating}/5
          <AiFillStar className="text-yellow" />
          {console.log(review)}
          {loggedUser._id === review.user_id && review._id && (
            <BiTrash
              className="ml-3"
              onClick={() =>
                handleDelete(review.user_id, review._id, product_id)
              }
            />
          )}
        </div>
      </div>
      <p className="text-gray-600 mx-2 mt-1">{review?.text}</p>
    </li>
  );
}

export default CustomerReview;
