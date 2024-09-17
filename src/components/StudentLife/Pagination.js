import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ itemsPerPage, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => handleClick(index + 1)}
        className={currentPage === index + 1 ? 'active' : ''}
      >
        {index + 1}
      </button>
    ));
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);
    return selectedItems.map((item, index) => (
      <div key={index} className="page-content">
        {item}
      </div>
    ));
  };

  return (
    <div className="pagination-container">
      {renderData()}
      <div className="pagination-controls">
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export default Pagination;
