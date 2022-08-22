import React, { useState } from "react";
import "./ThoughtItem.css";
import Card from "../UI/Card";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ThoughtItem = (props) => {
  //   console.log(props);
  const [liked, setLiked] = useState(null);
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  const likeHandler = () => {
    setLiked(!liked);
  };
  return (
    <li>
      <Card className="thought-item">
        <TipsAndUpdatesIcon />
        <div className="thought-item__description">{props.content}</div>
        <button className="thought-item__button" onClick={deleteHandler}>
          <DeleteOutlineIcon className="thought-item__delete" />
        </button> 
        <div>
          {liked ? (
            <button className="thought-item__button" onClick={likeHandler}>
              <FavoriteIcon className="thought-item__delete" />
            </button>
          ) : (
            <button className="thought-item__button" onClick={likeHandler}>
              <FavoriteBorderIcon className="thought-item__delete" />
            </button>
          )}
        </div>
      </Card>
    </li>
  );
};

export default ThoughtItem;
