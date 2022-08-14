import React, { useState } from "react";
import "./NewThought.css";
import ThoughtForm from "./ThoughtForm";

const NewThought = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveThoughtDataHandler = (enteredThoughtData) =>{
    const thoughtData = {
        ...enteredThoughtData,
        id: Math.random().toString(),
    }
    props.onAddThought(thoughtData);
    setIsEditing(false);
  }
  const startEditingHandler = () => {
    setIsEditing(true);
  };
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
