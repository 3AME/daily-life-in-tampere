import React, { useState } from "react";
import "./ViewForm.css";

const ViewForm = (props) => {
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredLocationLink, setEnteredLocationLink] = useState("");
  const [enteredDairy, setEnteredDairy] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };
  const locationLinkChangeHandler = (event) => {
    setEnteredLocationLink(event.target.value);
  };
  const dairyChangeHandler = (event) => {
    setEnteredDairy(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler =(event) =>{
    event.preventDefault();

    const viewData = {
        location:enteredLocation,
        locationLink: enteredLocationLink,
        diary: enteredDairy,
        date: new Date(enteredDate),
    }

    props.onSaveViewData(viewData);
    setEnteredLocation('');
    setEnteredLocationLink('');
    setEnteredDairy('');
    setEnteredDate('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-view__controls">
        <div className="new-view__control">
          <label>Location</label>
          <input
            type="text"
            value={enteredLocation}
            onChange={locationChangeHandler}
          />
        </div>
        <div className="new-view__control">
          <label>LocationLink</label>
          <input
            type="text"
            value={enteredLocationLink}
            onChange={locationLinkChangeHandler}
          />
        </div>
        <div className="new-view__control">
          <label>Dairy</label>
          <input
            type="text"
            value={enteredDairy}
            onChange={dairyChangeHandler}
          />
        </div>
        <div className="new-view__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-08-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-view__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Experience</button>
      </div>
    </form>
  );
};

export default ViewForm;
