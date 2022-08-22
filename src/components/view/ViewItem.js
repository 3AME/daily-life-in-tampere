import React from "react";
import ViewDate from "./ViewDate";
import Link from '@mui/material/Link';
import "./ViewItem.css";
import Card from '../UI/Card.js'


const ViewItem = (props) => {
  return (
    <li>
      <Card className="view-item">
        <ViewDate date={props.date}/>
        <div className="view-item__description">
            <h2><Link href={props.link} color="#40005d">{props.location}</Link></h2>
            <div className="view-item__diary">{props.diary}</div>
            <div className="view-item__img"><img src={props.img} alt="" ></img></div>
        </div>
      </Card>
    </li>
  );
};


export default ViewItem;