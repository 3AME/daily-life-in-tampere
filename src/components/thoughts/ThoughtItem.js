import React from "react";
import "./ThoughtItem.css";
import Card from '../UI/Card';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const ThoughtItem = (props) => {
//   console.log(props);
  return (
    <li>
      <Card className="thought-item">
        <TipsAndUpdatesIcon />
        <div className="thought-item__description">{props.content}</div>
      </Card>
    </li>
  );
};

export default ThoughtItem;
  