import React from "react";
import ViewDate from "./ViewDate";
import Link from "@mui/material/Link";
import "./ViewItem.css";
import Card from "../UI/Card.js";
/**
 *  ViewItem.js
 *  This component is to show the single item of view experience. 
 *  It contains the date, location with location link, dairy, and picture. 

 */

const ViewItem = (props) => {
  return (
    <li>
      <Card className="view-item">
        <ViewDate date={props.date} />
        <div className="view-item__description">
          <h2>
            <Link href={props.link} color="#ffffff">
              {props.location}
            </Link>
          </h2>
          <div className="view-item__diary">{props.diary}</div>
          <div className="view-item__img">
            <img src={props.img} alt=""></img>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ViewItem;
