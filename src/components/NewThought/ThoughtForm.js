import React, { useState } from "react";
import styles from "./ThoughtForm.module.css";
/**
 *  ThoughtForm.js
 *  This component is a form. 
 *  The form contains a text input, and button for cancel or add. 

 */
const ThoughtForm = (props) => {
  const [enteredThought, setEnteredThought] = useState("");
  const [isValid, setIsValid] = useState(true);
  /**If the input is empty then steIsvalid to ture, if not, setEnteredThought as the input value. */
  const thoughtChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredThought(event.target.value);
  };
  /**When the form is submitted, if the enteredThought value is empty then return nothing and close the form. If the enteredThought value is ture then put it to the thoughtData and named it as thoughtContent. And call the onSaveThoughtData in the NewThought component, then setEnteredThought as empty. */
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
    setEnteredThought("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${styles["new-thought__controls"]} ${
          !isValid && styles.invalid
        }`}
      >
        <div className={`${styles["new-thought__control"]}`}>
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
