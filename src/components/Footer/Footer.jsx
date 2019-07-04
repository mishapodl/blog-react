import React from "react";
import { Navigation, BarContacts } from "../index";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Navigation showListItem={false} />
        <BarContacts showHaderSection={true} />
      </div>
    </footer>
  );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
