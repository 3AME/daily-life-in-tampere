import React from "react";
import "./ThoughtItem.css";
import Card from "../UI/Card";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ThoughtItem = (props) => {
  //   console.log(props);
  const deleteHandler = () =>{
    props.onDelete(props.id);
  }
  return (
    <li>
      <Card className="thought-item">
        <TipsAndUpdatesIcon />
        <div className="thought-item__description">{props.content}</div>
        {/* <div className="thought-item__button"> */}
        {/* <button>Delete</button> */}
        <button className="thought-item__button" onClick={deleteHandler}>
          <DeleteOutlineIcon className="thought-item__delete" />
        </button>
        <button className="thought-item__button" onClick={deleteHandler}>
          <FavoriteBorderIcon className="thought-item__delete" />
        </button>

        {/* </div> */}
      </Card>
    </li>
  );
};

export default ThoughtItem;
