import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <main className="error-not-found">
      <h1>NotFound</h1>
			<Link to="/">Home</Link>
    </main>
  );
};
export default NotFound;
