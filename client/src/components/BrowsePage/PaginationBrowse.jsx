import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../features/shop/paginationSlice";
function PaginationBrowse({ data }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 1;
  const dispatch = useDispatch();
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    dispatch(setItems(data.slice(itemOffset, endOffset)));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };
  return (
    <main className="mt-auto">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center gap-2 md:gap-5 h-12 content-center text-xl "
        pageLinkClassName="page-num p-1 md:p-3"
        previousLinkClassName="page-num p-1 md:p-3"
        nextLinkClassName="page-num p-1 md:p-3"
        activeLinkClassName="active"
      />
    </main>
  );
}

export default PaginationBrowse;
