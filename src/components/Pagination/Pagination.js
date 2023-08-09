import React from "react";
import './Pagination.css';

const Pagination = ({ todosPerPage, totalTodosQuantity, onChangePage }) => {
  const pagenos = [];

  for (let i = 1; i <= Math.ceil(totalTodosQuantity / todosPerPage); i++) {
    pagenos.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        {pagenos.map((page) => {
            return (
                <li key={page}>
                    <button onClick={() => onChangePage(page)}>
                        {page}
                    </button>
            </li>
        )
        })}
      </ul>
    </div>
  );
};

export default Pagination;
