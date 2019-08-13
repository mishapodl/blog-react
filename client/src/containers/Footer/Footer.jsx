import React from "react";
import { Navigation, BarContacts } from "../../components/index";
import { menuListFooter } from "../../data";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Navigation menu={menuListFooter} />
        <BarContacts showHaderSection={true} />
      </div>
      <div className="footer-copy">
        <div className="footer-conteiner">
          <div className="footer-copyright">
            &copy; unknown<span /> 2019
          </div>
          <div className="footer-developed-by">
            <p>
              Developed by<strong>: Michael Podlevskykh</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
