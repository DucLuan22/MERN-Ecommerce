import React from "react";

import CustomerReview from "./CustomerReview";
function ReviewsContainer() {
  return (
    <main className="h-[500px] shadow-xl rounded-md mt-8 mb-10 md:mt-0 border-[1px] border-gray-500 flex-col flex">
      <div className="h-[87%] overflow-y-auto">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <CustomerReview />
          <CustomerReview />
          <CustomerReview />
        </ul>
      </div>
      <hr />
      <div className="mt-auto ml-auto mr-2 mb-2">
        <button className="bg-black text-white hover:bg-gray-800 p-2 rounded-md">
          Write a review
        </button>
      </div>
    </main>
  );
}

export default ReviewsContainer;
