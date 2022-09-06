import React from "react";
import { Chip, withStyles, makeStyles } from "@material-ui/core";
import { Stack } from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";
import WaterIcon from "@mui/icons-material/Water";
import MuseumIcon from "@mui/icons-material/Museum";
import Museums from "./ViewMuseumData";
import Lakes from "./ViewLakeData";
import Forests from "./ViewForestData";
import "./ViewDataList.css";
/**
 *  ViewDataList.js
 *  Showing lakes, museums, and forests data. 

 */

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0.3rem",
    color: "#4A4A4A",
    backgroundColor: "#ffffff",
    border: "3px solid #7D7DD7",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  icon: {
    color: "#5555C0",
  },
}));
const StyledChip = withStyles({
  root: {
    "&&:hover": {
      backgroundColor: "#7D7DD7",
      color:"#ffffff",
    },
  },
  // icon: {
  //   "&&:hover": {
  //     color: "#ffffff",
  //   },
  // },
})(Chip);
const ViewDataList = () => {
  const classes = useStyles();
  return (
    <Stack direction="row" spacing={2}>
      <div className="view-data-list css-1yjo05o">
        <div className=" view-data__title">
          <h2>Featured Places </h2>
          <h5> Click them which will bring you to the map</h5>
        </div>
        <div className="view-data__items">
          <div className="view-data-item">
            {Museums.map((museum) => (
              <StyledChip
                key={museum.id}
                icon={<MuseumIcon className={classes.icon} />}
                label={museum.location}
                component="a"
                href={museum.locationLink}
                clickable
                className={classes.root}
              />
            ))}
          </div>

          <div className="view-data-item">
            {Lakes.map((lake) => (
              <StyledChip
                key={lake.id}
                icon={<ForestIcon className={classes.icon} />}
                label={lake.location}
                component="a"
                href={lake.locationLink}
                clickable
                className={classes.root}
              />
            ))}
          </div>
          <div className="view-data-item">
            {Forests.map((forest) => (
              <StyledChip
                key={forest.id}
                icon={<WaterIcon className={classes.icon} />}
                label={forest.location}
                component="a"
                href={forest.locationLink}
                clickable
                className={classes.root}
              />
            ))}
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default ViewDataList;
