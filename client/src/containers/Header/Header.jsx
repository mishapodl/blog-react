import React from "react";
import { Logo, Navigation, BarContacts } from "../../components/index";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div>
        <Logo />
        <Navigation />
      </div>
      <h1>Top blog in the world!</h1>
      <BarContacts />
    </header>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
