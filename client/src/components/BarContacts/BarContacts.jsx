import React from "react";
import PropTypes from "prop-types";
import "./BarContacts.scss";

const BarContacts = ({ showHaderSection }) => {
  return (
    <section className="contact-information">
      {showHaderSection && (
        <header>
          <h3>Contact information</h3>
        </header>
      )}

      <ul>
        <li>
          <a href="mailto: mishapod@gmail.com">
            <i className="icon far fa-envelope" />
          </a>
        </li>
        <li>
          <a href="https://github.com/mishapodl">
            <i className="icon fab fa-github" />
          </a>
        </li>
        <li>
          <a href="https://ru.stackoverflow.com/users/252282/michael-podlevskykh">
            <i className="icon fab fa-stack-overflow" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/michael-podlevskykh-574b98119/">
            <i className="icon fab fa-linkedin" />
          </a>
        </li>
      </ul>
    </section>
  );
};

BarContacts.propTypes = {
  showHaderSection: PropTypes.bool.isRequired
};
BarContacts.defaultProps = {
  showHaderSection: false
};

export default BarContacts;
