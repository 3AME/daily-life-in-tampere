import React, { useState } from "react";
import styles from "./ViewForm.module.css";

const ViewForm = (props) => {
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredLocationLink, setEnteredLocationLink] = useState("");
  const [enteredDairy, setEnteredDairy] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredImg, setEnteredImg] = useState("");
  const [isValid, setIsValid] = useState(true);
  const locationChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredLocation(event.target.value);
  };
  const locationLinkChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredLocationLink(event.target.value);
  };
  const dairyChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredDairy(event.target.value);
  };
  const dateChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredDate(event.target.value);
  };
  const imgChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    let imgfile = event.target.files[0]; //Acquire the first image from input
    console.log('I am the origin picture', imgfile);
    let reader = new FileReader(); //Using readAsDataURL for image return
    // reader.readAsDataURL(imgfile);
    console.log(reader.readAsDataURL(imgfile));
  /*   reader.onload = function (event){
      let imgs = event.result;
      console.log("I am the picture returned as Base64",imgs);
      setEnteredImg(imgs);
    } */
    setEnteredImg(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredLocation.trim().length === 0 ||
      enteredLocationLink.trim().length === 0 ||
      enteredDairy.trim().length === 0 ||
      enteredDate.trim().length === 0 ||
      enteredImg.trim().length === 0
    ) {
      setIsValid(false);
      return;
    }
    const viewData = {
      location: enteredLocation,
      locationLink: enteredLocationLink,
      diary: enteredDairy,
      date: new Date(enteredDate),
      img: enteredImg,
    };

    props.onSaveViewData(viewData);
    // console.log(viewData);
    setEnteredLocation("");
    setEnteredLocationLink("");
    setEnteredDairy("");
    setEnteredDate("");
    setEnteredImg("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${styles["new-view__controls"]} ${
          !isValid && styles.invalid
        }`}
      >
        <div className={`${styles["new-view__control"]}`}>
          <label>Location</label>
          <input
            type="text"
            value={enteredLocation}
            onChange={locationChangeHandler}
          />
        </div>
        <div className={`${styles["new-view__control"]}`}>
          <label>LocationLink</label>
          <input
            type="text"
            value={enteredLocationLink}
            onChange={locationLinkChangeHandler}
          />
        </div>
        <div className={`${styles["new-view__control"]}`}>
          <label>Dairy</label>
          <input
            type="text"
            value={enteredDairy}
            onChange={dairyChangeHandler}
          />
        </div>
        <div className={`${styles["new-view__control"]}`}>
          <label>Date</label>
          <input
            type="date"
            min="2021-08-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className={`${styles["new-view__control"]}`}>
          <label htmlFor="img">Select Image</label>
          <input
            type="file"
            id="img"
            accept="image/*"
            alt=""
            value={enteredImg}
            onChange={imgChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-view__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Experience</button>
      </div>
    </form>
  );
};

export default ViewForm;
