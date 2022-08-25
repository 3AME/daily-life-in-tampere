import React from "react";
import "./life.css";
import LifeSkills from "./LifeSkills";
/**
 *  This file will use the LifeSkills component to show all the life skills.
 */
const Life = () => {
  return (
    <section id="life">
      <h5>How about</h5>
      <h2>Life skills?</h2>
      <LifeSkills></LifeSkills>
    </section>
  );
};

export default Life;
