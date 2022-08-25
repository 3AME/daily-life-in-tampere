import React from "react";
import "./supermarket.css";
import Supermarket from "./Supermarket";
import Transpotation from "./Transportation";
/**
 * This is LifeSkills component.
 * LifeSkills componenr includs Supermarket component and Transpotation component.
 */
function LifeSkills() {
  return (
    <div>
      <Supermarket />
      <Transpotation />
    </div>
  );
}

export default LifeSkills;
