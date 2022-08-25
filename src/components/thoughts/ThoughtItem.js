import React, { useState } from "react";
import "./ThoughtItem.css";
import Card from "../UI/Card";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
/**
 *  ThoughtItem.js
 *  This component is to present the single thought.
 *  There is a Tips icon at the beginning, and the content of thought, then there are delete icon and like icon. This component will be used in ThoughtsList.js
 */
const ThoughtItem = (props) => {
  // console.log(props);
  const [liked, setLiked] = useState(null);
  /**Delete the item throught its id, because id is unique. */
  const deleteHandler = () => {
    props.onDelete(props.id); //Get thoughtItem's id
    // console.log(props.id);
  };
  /**setLiked to the reverse side so it can complete the like and unlike. */
  const likeHandler = () => {
    setLiked(!liked);
  };
  return (
    <li>
      <Card className="thought-item">
        <TipsAndUpdatesIcon />
        <div className="thought-item__description" key={props.id}>
          {props.content}
        </div>
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
