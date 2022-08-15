import React from "react";
import { Chip } from "@material-ui/core";
import { Stack } from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";
import WaterIcon from "@mui/icons-material/Water";
import MuseumIcon from "@mui/icons-material/Museum";
import Museums from "./ViewMuseumData";
import Lakes from "./ViewLakeData";
import Forests from "./ViewForestData";

const ViewDataList = () => {
  return (
    <Stack direction="row" spacing={1}>
      <div>
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
      <div>
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
      <div>
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
