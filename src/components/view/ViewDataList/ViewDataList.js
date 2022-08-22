import React from "react";
import { Chip } from "@material-ui/core";
import { Stack } from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";
import WaterIcon from "@mui/icons-material/Water";
import MuseumIcon from "@mui/icons-material/Museum";
import Museums from "./ViewMuseumData";
import Lakes from "./ViewLakeData";
import Forests from "./ViewForestData";
import "./ViewDataList.css";

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
              <Chip
                key={museum.id}
                icon={<MuseumIcon style={{color:"#40005d"}}/>}
                label={museum.location}
                component="a"
                href={museum.locationLink}
                clickable
                style={{margin:"0.3rem", fontFamily:'Poppins'}}
                className="MuiChip-label"
              />
            ))}
          </div>

          <div className="view-data-item">
            {Lakes.map((lake) => (
              <Chip
                key={lake.id}
                icon={<ForestIcon style={{color:"#40005d"}}/>}
                label={lake.location}
                component="a"
                href={lake.locationLink}
                clickable
                style={{margin:"0.3rem"}}
              />
            ))}
          </div>
          <div className="view-data-item">
            {Forests.map((forest) => (
              <Chip
                key={forest.id}
                icon={<WaterIcon style={{color:"#40005d"}}/>}
                label={forest.location}
                component="a"
                href={forest.locationLink}
                clickable
                style={{margin:"0.3rem"}}
              />
            ))}
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default ViewDataList;
