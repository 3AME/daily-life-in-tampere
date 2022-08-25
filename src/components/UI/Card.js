// import React from "react";
// import "./Card.css";

// const Card = (props) => {
//   const classes = "card" + props.className;
//   return <div className={classes}>{props.children}</div>;
// };
// export default Card;
// card后要加空格

import React from "react";
import "./Card.css";
/**Creat own Card style */
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
