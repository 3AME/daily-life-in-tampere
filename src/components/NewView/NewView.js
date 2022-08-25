import React, { useState } from "react";
import ViewForm from "./ViewForm";
import "./NewView.css";
/**
 *  NewView.js---
 *  This component is to add a new visit experience.
 *  Add a new visit expeience is a function, the default state is showed as a button, when users click the button,then will hide the button and expend the thought form. Form will be imported from ViewForm.js
 */
const NewView = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  /**Accept data from ViewForm component, create viewData which will sent to ViewList later through onAddview. Copy the enterdViewData and set a random id through Math.random().toString(). Then set the isEditing to false, so it will close the form. */
  const saveViewDataHandler = (enteredViewData) => {
    const viewData = {
      ...enteredViewData,
      id: Math.random().toString(),
    };
    props.onAddView(viewData);
    // console.log(viewData);
    setIsEditing(false);
  };
  /**Through setIsEditing to true, then the isEditing add a new element is true so the ViewForm will expanded.  */
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  /**Through setIsEditing to true, then the isEditing add a new element is false so the ViewForm will closed. */
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-view">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New View Experience</button>
      )}
      {isEditing && (
        <ViewForm
          onSaveViewData={saveViewDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewView;
