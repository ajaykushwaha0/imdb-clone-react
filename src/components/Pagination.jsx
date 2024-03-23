import React from "react";

function Pagination({ handlePre, handleNext, pageNumber }) {
  return (
    <div className="pagination-container">
      <div onClick={handlePre} className="pagination-button">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="pagination-page-number">{pageNumber}</div>
      <div onClick={handleNext} className="pagination-button">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
