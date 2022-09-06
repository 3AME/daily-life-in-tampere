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
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));
const StyledChip = withStyles({
  root:{
    "&&:hover":{
      backgroundColor:"#7D7DD7"
    }
  }
})(Chip);
const ViewDataList = () => {
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
                icon={<MuseumIcon style={{ color: "#5555C0" }} />}
                label={museum.location}
                component="a"
                href={museum.locationLink}
                clickable
                style={{ margin: "0.3rem", fontFamily: "Poppins", color:"#4A4A4A", border:"3px solid #7D7DD7", backgroundColor:"#ffffff"  }}
                className="MuiChip-label"
              />
            ))}
          </div>

          <div className="view-data-item">
            {Lakes.map((lake) => (
              <Chip
                key={lake.id}
                icon={<ForestIcon style={{ color: "#5555C0" }} />}
                label={lake.location}
                component="a"
                href={lake.locationLink}
                clickable
                style={{ margin: "0.3rem", color:"#4A4A4A", border:"3px solid #7D7DD7", backgroundColor:"#ffffff" }}
              />
            ))}
          </div>
          <div className="view-data-item">
            {Forests.map((forest) => (
              <Chip
                key={forest.id}
                icon={<WaterIcon style={{ color: "#5555C0"}} />}
                label={forest.location}
                component="a"
                href={forest.locationLink}
                clickable
                style={{ margin: "0.3rem", color:"#4A4A4A", border:"3px solid #7D7DD7", backgroundColor:"#ffffff",   }}
              />
            ))}
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default ViewDataList;
