import React from "react";
import ViewDate from "./ViewDate";
import Link from '@mui/material/Link';
import "./ViewItem.css";


const ViewItem = (props) => {
    // alert(props.img);
  return (
    <li>
      <div className="view-item">
        <ViewDate date={props.date}/>
        <div className="view-item__description">
            {/* <h2>{props.title}</h2> */}
            <h2><Link href={props.link}>{props.location}</Link></h2>
            <div className="view-item__dairy">{props.diary}</div>
            <div><img src={props.img} alt=""></img></div>
        </div>
      </div>
    </li>
  );
};


export default ViewItem;