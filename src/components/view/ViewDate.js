import React from "react";
import "./ViewDate.css";

const ViewDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month : "long" });
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
