import React from "react";
import "./Pagination.scss";

const Pagination = ({ loadPosts }) => {
  const loadPostsPagination = async page => {
    await loadPosts(page);
  };

  return (
    <div className="pagination">
      {[1, 2].map(i => (
        <button onClick={loadPostsPagination.bind(null, i)} key={i}>
          {i}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
