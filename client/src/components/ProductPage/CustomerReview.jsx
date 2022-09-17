import React from "react";
import { AiFillStar } from "react-icons/ai";
function CustomerReview() {
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
            Bonnie Green
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            Jan 24th Thursday 3:45PM
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          4.9/5
          <AiFillStar className="text-yellow" />
        </div>
      </div>
      <p className="text-gray-600 mx-2 mt-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
        recusandae. Dolore, laboriosam fuga facilis rerum omnis ratione non
        ducimus quam est veniam vero iure. Rerum commodi facere perferendis
        molestias perspiciatis. Doloremque nostrum exercitationem molestias
        neque, iste magnam corrupti dicta. Iste itaque impedit, quam perferendis
        ratione cumque facilis libero ipsa maiores asperiores aliquid molestiae
        ea fuga accusamus, nostrum quasi odio possimus?{" "}
      </p>
    </li>
  );
}

export default CustomerReview;
