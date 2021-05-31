import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate ,currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage==number ?"pagination-item  pagination-item--active" : "pagination-item "} >
            <a className="pagination-item__link" onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
