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
    <Stack direction="row" spacing={1} className="view-data-list">
      <div className="view-data__title">
        <h3>Featured Places:</h3>Click them which will bring you to the map
      </div>
      <div className="view-data-item">
        {Museums.map((museum) => (
          <Chip
            key={museum.id}
            icon={<MuseumIcon />}
            label={museum.location}
            component="a"
            href={museum.locationLink}
            clickable
          />
        ))}
      </div>
      <div className="view-data-item">
        {Lakes.map((lake) => (
          <Chip
            key={lake.id}
            icon={<ForestIcon />}
            label={lake.location}
            component="a"
            href={lake.locationLink}
            clickable
          />
        ))}
      </div>
      <div className="view-data-item">
        {Forests.map((forest) => (
          <Chip
            key={forest.id}
            icon={<WaterIcon />}
            label={forest.location}
            component="a"
            href={forest.locationLink}
            clickable
          />
        ))}
      </div>
    </Stack>
  );
};

export default ViewDataList;
