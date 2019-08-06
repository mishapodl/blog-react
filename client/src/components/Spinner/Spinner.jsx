import React from "react";
import "./Spinner.scss";

const Spinner = ({ className, header }) => {
  return (
    <div className={`spinner ${className}-posts`}>
      <div className="spinner-circle">
        <img src={"../spinner.png"} alt="" width="100px" />
      </div>
    </div>
  );
};

export default Spinner;
