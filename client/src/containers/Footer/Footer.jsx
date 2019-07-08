import React from "react";
import { Navigation, BarContacts } from "../../components/index";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Navigation showListItem={false} />
        <BarContacts showHaderSection={true} />
      </div>
			<div class="footer-copy">
        <div class="footer-conteiner">
          <div class="footer-copyright">&copy; zazaend<span></span> 2019</div>
          <div class="footer-developed-by">
            <p>Developed by<strong>: Michael Podlevskykh</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
