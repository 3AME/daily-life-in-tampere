import React from "react";
import ThoughtItem from "./ThoughtItem";
import "./ThoughtsList.css";

const ThoughtsList = (props) => {
  console.log(props.items);
  return (
    <ul className="thoughts-list">
      {props.items.map((thought) => (
        <ThoughtItem
          key={thought.id}
          id={thought.id}
          content={thought.thoughtContent}
          onDelete={props.onDeleteItem}
        />
      ))}
    </ul>
  );
};

export default ThoughtsList;
