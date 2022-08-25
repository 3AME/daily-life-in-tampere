import React from "react";
import Card from "../UI/Card";
import ThoughtsList from "./ThoughtsList";
import NewThought from "../NewThought/NewThought";
import "./thoughts.css";
import { useState } from "react";
import DUMMY_Thoughts from "./ThoughtsData";
/**
 *  Thoughts.js
 *  This component is to present thoughts part.
 *  In this area, there is an add new thought buuton which can add a new text. And show all thoughts list.

 */
const Thoughts = () => {
  const [thoughts, setThoughts] = useState(DUMMY_Thoughts);
  /**When get data from NewView component, then add it to a new array and copy the old array after the new element. Return the new array that means add a new data. */
  const addThoughtHandler = (thought) => {
    setThoughts((prevThoughts) => {
      const updateThoughts = [thought, ...prevThoughts];
      return updateThoughts;
    });
  };
  /**Use filter to get all items the id is not same as thoughtId, so the certain id item is deleted from the origin list. */
  const deleteItemHandler = (thoughtId) => {
    setThoughts((prevThoughts) => {
      const updateThoughts = prevThoughts.filter(
        (thought) => thought.id !== thoughtId
      );
      return updateThoughts;
    });
  };
  let content = (
    <p
      style={{
        textAlign: "center",
        color: "#40005d",
        backgroundColor: "#eec6c6",
      }}
    >
      No thoughts found. Maybe add one?
    </p>
  );
  if (thoughts.length > 0) {
    content = (
      <ThoughtsList items={thoughts} onDeleteItem={deleteItemHandler} />
    );
  }
  return (
    <section id="thoughts">
      <h5>About</h5>
      <h2>My thoughts</h2>
      <NewThought onAddThought={addThoughtHandler} />
      <Card className="thoughts">
        {content}
        {/* <ThoughtsList items={thoughts} onDeleteItem={deleteItemHandler} /> */}
      </Card>
    </section>
  );
};

export default Thoughts;
