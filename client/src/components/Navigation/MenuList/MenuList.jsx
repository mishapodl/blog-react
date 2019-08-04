import React from "react";
import { Link } from "react-router-dom";
import "./MenuList.scss";

const MenuList = ({ menu }) => (
  <ul>
    {menu.map(({ name, link }) => {
      return <li>{<Link to={link}>{name}</Link>}</li>;
    })}
  </ul>
);

export default MenuList;
