import React from "react";
import "./ViewDate.css";
/**
 *  ViewDate.js
 *  This component is the time presentation.

 */
const ViewDate = (props) => {
  /**Display year, month, day with cetrain way. */
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="view-date">
      <div className="view-date__month">{month}</div>
      <div className="view-date__year">{year}</div>
      <div className="view-date__day">{day}</div>
    </div>
  );
};

export default ViewDate;
