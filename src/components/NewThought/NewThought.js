import React, { useState } from "react";
import "./NewThought.css";
import ThoughtForm from "./ThoughtForm";
/**
 *  NewThought.js
 *  This component is to add a new thought.
 *  Add a new thought is a function, the default state is showed as a button, when users click the button,then will hide the button and expend the thought form. Form will be imported from ThoughtForm.js
 */
const NewThought = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  /**Accept data from ThoughtForm component, create viewData which will sent to ViewList later through onAddview. Copy the enterdViewData and set a random id through Math.random().toString(). Then set the isEditing to false, so it will close the form. */
  const saveThoughtDataHandler = (enteredThoughtData) => {
    const thoughtData = {
      ...enteredThoughtData,
      id: Math.random().toString(),
    };
    props.onAddThought(thoughtData);
    setIsEditing(false);
  };
  /**Through setIsEditing to true, then the isEditing add a new element is true so the ThoughtForm will expanded.  */
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  /**Through setIsEditing to true, then the isEditing add a new element is false so the ThoughtForm will closed. */
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-thought">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Thought</button>
      )}
      {isEditing && (
        <ThoughtForm
          onSaveThoughtData={saveThoughtDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewThought;
