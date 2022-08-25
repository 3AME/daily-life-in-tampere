import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Link } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { GoLocation } from "react-icons/go";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import SportsData from "./SportsData";
import SportLocationData from "./SportLocationData";
import { createTheme } from "@mui/material/styles";
/**
 *  This component is to show sport related information.
 *  There are type of sports, sports location link, and tip for sports. Import SportsData from SportsData.js, and import SportsLocationData from SportsLocationData.js
 */
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: 250,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));
const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', "sans-serif"].join(","),
  },
});

function Sports() {
  const classes = useStyles();
  return (
    <section id="sports" className="sports">
      <h5>What</h5>
      <h2>Sports I will do?</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
          fontFamily: "Poppins",
        }}
      >
        {SportsData.map(({ id, title, img }) => {
          return (
            <Card
              className={classes.root}
              key={id}
              style={{ backgroundColor: "#eec6c6", color: "#40005d" }}
            >
              <CardMedia className={classes.media} image={img}></CardMedia>
              <CardHeader title={title} className="font_style"></CardHeader>
            </Card>
          );
        })}
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{
            typography: { theme },
            "& > :not(style) + :not(style)": { ml: 10 },
          }}
        >
          <GoLocation />
          {SportLocationData.map(({ id, locationName, locationLink }) => {
            return (
              <Link
                href={locationLink}
                variant="body2"
                style={{ color: "white", fontFamily: "Poppins" }}
                key={id}
              >
                {locationName}
              </Link>
            );
          })}
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          fontFamily: "Poppins",
        }}
      >
        <Card
          className={classes.root}
          style={{ backgroundColor: "#eec6c6", color: "#40005d" }}
        >
          <CardHeader
            title="Tips!!!"
            style={{ fontFamily: "Poppins" }}
          ></CardHeader>
          <CardContent>
            <Typography paragraph style={{ fontFamily: "Poppins" }}>
              Group exercise can be booked the day before event. 😇
            </Typography>
            <Link
              href="https://sites.tuni.fi/sportuni-en/find-your-sport/group-exercise/group-exercise-schedule/"
              style={{ fontFamily: "Poppins" }}
            >
              SportUni Time Selection
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Sports;
