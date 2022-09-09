import React from "react";

export default function Pagination({
  prevPage,
  nextPage,
  prev,
  next,
  loading,
}) {
  const handlePrev = () => {
    prevPage();
  };

  const handleNext = () => {
    nextPage();
  };

  return loading ? (
    <ul className="pagination justify-content-center m-5">

        <div className="spinner-border " />

    </ul>
  ) : (
    <ul className="pagination justify-content-center m-5 gap-3">
      {prev ? (
        <button className="page-item btn btn-success" onClick={handlePrev}>
          Previous
        </button>
      ) : (
        <button className="page-item btn btn-secondary" onClick={handlePrev}>
          Previous
        </button>
      )}

      {next ? (
        <button className="page-item btn btn-success" onClick={handleNext}>
          Next
        </button>
      ) : (
        <button className="page-item btn btn-secondary" onClick={handleNext}>
          Next
        </button>
      )}
    </ul>
  );
}
