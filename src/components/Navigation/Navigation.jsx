import React from "react";
import PropTypes from "prop-types";
import "./Navigation.scss";

const Navigation = ({ showListItem }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {showListItem && (
            <li>
              <a href="/">Contacts</a>
            </li>
          )}
          <li>
            <a href="/">Posts</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

Navigation.propTypes = {};

Navigation.defaultProps = {
  showListItem: true
};

export default Navigation;
