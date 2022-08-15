import React, { useState } from "react";
import ViewForm from "./ViewForm";
import "./NewView.css";

const NewView = (props) => {
   const [isEditing, setIsEditing]= useState(false);
   const saveViewDataHandler = (enteredViewData) =>{
    const viewData = {
        ...enteredViewData,
        id: Math.random().toString(),
    }
    props.onAddView(viewData);
    setIsEditing(false);
   }
   const startEditingHandler = () =>{
    setIsEditing(true);
   }
   const stopEditingHandler =() =>{
    setIsEditing(false);
   }
  return (
    <div className="new-view">
        {!isEditing && <button onClick={startEditingHandler}>Add New View Experience</button>}
        {isEditing && <ViewForm onSaveViewData = {saveViewDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewView;