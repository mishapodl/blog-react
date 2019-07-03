import React from "react";

const BarContacts = ({ showHader }) => {
  return (
    <section className="contact-information">
      {false ? (
        <header>
          <h3>Contact information</h3>
        </header>
      ) : null}

      <ul>
        <div>
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
        </div>
      </ul>
    </section>
  );
};

export default BarContacts;
