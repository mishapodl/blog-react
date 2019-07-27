import React from "react";
import {
  Logo,
  Navigation,
  BarContacts,
  RegisterModal
} from "../../components/index";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div>
        <Logo />
        <Navigation />
        <RegisterModal />
      </div>
      <h1>Top blog in the world!</h1>
      <BarContacts />
    </header>
  );
};

export default Header;
