import React from "react";
import { Logo, Navigation, BarContacts } from "../index";

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

export default Header;
