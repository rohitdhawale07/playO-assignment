import React from "react";

const Pagination = ({
  customersPerPage,
  totalCustomers,
  paginate,
  currentPage,
  setCurrentPage,
  isOpen,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCustomers / customersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(totalCustomers / customersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav>
      {isOpen ? null : (
        <ul className="pagination flex gap-2 text-sm ">
          {currentPage > 1 ? (
            <button
              onClick={handlePrev}
              className="text-gray-500 hover:text-gray-800"
            >
              Prev
            </button>
          ) : null}
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item px-3 py-1 rounded-md border ${
                currentPage === number
                  ? "bg-[#283238] text-white"
                  : "text-[#283238] "
              }`}
            >
              <a
                onClick={() => paginate(number)}
                href="#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
          {currentPage < Math.ceil(totalCustomers / customersPerPage) && ( // Render Next button only if currentPage is less than total pages
            <button
              onClick={handleNext}
              className="text-sm text-gray-500 hover:text-gray-800"
            >
              Next
            </button>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
