import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Link } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { GoLocation } from "react-icons/go";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import SportsData from "./SportsData";
import SportLocationData from "./SportLocationData";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 1000,
    width: 300,
    height: 250,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));
function Sports() {
  const classes = useStyles();
  return (
    <section id="sports">
      <h5>What</h5>
      <h2>Sports I will do?</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
        {SportsData.map(({ id, title, img }) => {
          return (
            <Card className={classes.root} key={id}>
              <CardMedia className={classes.media} image={img}></CardMedia>
              <CardHeader title={title}></CardHeader>
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
            typography: "body1",
            "& > :not(style) + :not(style)": { ml: 10 },
          }}
        >
          <GoLocation />
          {SportLocationData.map(({id, locationName, locationLink}) => {
            return (
              <Link
                href={locationLink}
                variant="body2"
                style={{ color: "white" }}
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
        }}
      >
        <Card className={classes.root}>
          <CardHeader title="Tips!!!"></CardHeader>
          <CardContent>
            <Typography paragraph>
              Group exercise can be booked the day before event. 😇
            </Typography>
            <Link href="https://sites.tuni.fi/sportuni-en/find-your-sport/group-exercise/group-exercise-schedule/">
              SportUni Time Selection
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Sports;
