import React, { useState } from "react";
import styles from "./ThoughtForm.module.css";

const ThoughtForm = (props) => {
  const [enteredThought, setEnteredThought] = useState("");
  const [isValid, setIsValid] = useState(true);
  const thoughtChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
        setIsValid(true);
    }
    setEnteredThought(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredThought.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const thoughtData = {
      thoughtContent: enteredThought,
    };
    props.onSaveThoughtData(thoughtData);
    setEnteredThought('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={`${styles['new-thought__controls']} ${!isValid && styles.invalid}` }>
        <div className={`${styles['new-thought__control']}`}>
          <label>My thought</label>
          <input
            type="text"
            value={enteredThought}
            onChange={thoughtChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-thought__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Thought</button>
      </div>
    </form>
  );
};

export default ThoughtForm;
