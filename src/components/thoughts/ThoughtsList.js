import React from "react";
import ThoughtItem from "./ThoughtItem";
import "./ThoughtsList.css";


const ThoughtsList = (props) => {
  return (
    <ul className="thoughts-list">
      {props.items.map((thought) => (
        
        <ThoughtItem key={thought.id} content={thought.thoughtContent} />
      ))}
    </ul>
  );
};

export default ThoughtsList;
