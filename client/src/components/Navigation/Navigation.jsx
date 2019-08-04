import React from "react";
import PropTypes from "prop-types";
import MenuList from "./MenuList/MenuList";
import "./Navigation.scss";

const Navigation = ({ mobile, toggle, menu }) => {
  return (
    <>
      <nav className={`mobile ${mobile}`}>
        <span onClick={toggle} className="close">
          <i className="fas fa-times" />
        </span>
				<MenuList menu={menu}/>
      </nav>
      <div className={`menu-burger`} onClick={toggle}>
        <i className="fas fa-bars" />
      </div>
    </>
  );
};

Navigation.propTypes = {
  showListItem: PropTypes.bool.isRequired
};

Navigation.defaultProps = {
  showListItem: true
};

export default Navigation;
