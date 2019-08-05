import React from "react";
import PropTypes from "prop-types";
import { contacts } from "../../data";
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
        {contacts.map(({name, icon, href }) => (
          <li key={name}>
            <a href={href}>
              <i className={icon} />
            </a>
          </li>
        ))}
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
