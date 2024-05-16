import React from "react";

const DepositPagination = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button onClick={prevPage} className="page-link">
            Prev
          </button>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => setCurrentPage(pageNumber)}>
              {pageNumber}
            </button>
          </li>
        ))}
         <li className="page-item">
          <button onClick={nextPage} className="page-link">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default DepositPagination;