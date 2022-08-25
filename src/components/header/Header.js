import React from "react";
import "./header.css";
import Tampere from "../../assets/images/tampere.jpg";
/**
 *This file is the header of this application.
 *It shows the title of this application, named Daily Life in Tampere. And present a picture of Tampere.
 */
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, there is</h5>
        <h1>Daily Life in Tampere</h1>
        <div className="tampere">
          <img src={Tampere} alt="Tampere" />
        </div>
      </div>
    </header>
  );
};

export default Header;
