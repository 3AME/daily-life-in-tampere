import React from "react";
import ThoughtItem from "./ThoughtItem";
import "./ThoughtsList.css";
/**
 *  ThoughtsList.js
 *  This is a list component to collect all items.
 *  This component will import the ThoughtItem and delivery the data to it, so that every single thought can be present on the screen.

 */
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
