import React from "react";
import "./header.css";
import Tampere from "../../assets/images/tampere.jpg";

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
