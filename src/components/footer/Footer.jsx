import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ANFANG
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#view">View</a>
        </li>
        <li>
          <a href="#sports">Sports</a>
        </li>
        <li>
          <a href="#life">Life Skills</a>
        </li>
        <li>
          <a href="#thoughts">Thoughts</a>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; ANFANG. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
