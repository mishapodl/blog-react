import React from "react";
import {
  Logo,
  Navigation,
  BarContacts,
  RegisterModal,
	Logout,
	Login
} from "../../components/index";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div>
        <Logo />
        <Navigation />
        <div className="auth-panel">
          <RegisterModal />
          <Logout />
          <Login />
        </div>
      </div>
      <h1>Top blog in the world!</h1>
      <BarContacts />
    </header>
  );
};

export default Header;
