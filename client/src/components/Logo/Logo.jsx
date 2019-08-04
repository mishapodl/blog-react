import React from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={"/noimage.jpg"} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
