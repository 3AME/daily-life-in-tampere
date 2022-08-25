import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { VscOpenPreview } from "react-icons/vsc";
import { MdSportsTennis } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { useState } from "react";
/**
 *  Nav.js
 *  This file is the navigation of this application.
 *  Use id recognition and a hook to determine the current state to achieve a click-to-jump function
 */
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#view"
        onClick={() => setActiveNav("#view")}
        className={activeNav === "#view" ? "active" : ""}
      >
        <VscOpenPreview />
      </a>
      <a
        href="#sports"
        onClick={() => setActiveNav("#sports")}
        className={activeNav === "#sports" ? "active" : ""}
      >
        <MdSportsTennis />
      </a>
      <a
        href="#life"
        onClick={() => setActiveNav("#life")}
        className={activeNav === "#life" ? "active" : ""}
      >
        <GiSkills />
      </a>
      <a
        href="#thoughts"
        onClick={() => setActiveNav("#thoughts")}
        className={activeNav === "#thoughts" ? "active" : ""}
      >
        <BsReverseLayoutTextSidebarReverse />
      </a>
    </nav>
  );
};

export default Nav;
