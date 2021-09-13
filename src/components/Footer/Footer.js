import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <ul className="list__items">
        <li className="copyright">
          <p className="copy__p">&copy;Segment.io,inc.</p>
        </li>
        <li className="privacy">
          <p className="privacy__p">Privacy policy</p>
        </li>
        <li className="terms">
          <p className="terms__p">Terms of Service</p>
        </li>
        <li className="web">
          <p className="web__p">Website Data Collection</p>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
