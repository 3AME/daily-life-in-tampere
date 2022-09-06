import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Link } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TrafficData from "./TrafficData";
import "./supermarket.css";
/**
 *  Transportation.js---
 *  This is transportation component.
 *  It will import transportation data from TrafficData.js, and use map to present data one by one. Use the Card in the material ui to display data.
 */
 const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    height: 560,
    marginTop: "2rem",
    borderRadius: "20px",
    backgroundColor: "#7d7dd7",
    border: "0.5px solid #7D7DD7",
    color:"#4A4A4A",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    "&&:hover":{
      border: "5px solid #7D7DD7",
    }
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  styleLink: {
    color:"#7d7dd7", //Don't know why this doesn't work.
    "&&:hover":{
      color:"#5555C0"
    }
  },
  typography: {
    fontFamily: "Poppins",
    color:"#4A4A4A",
    link:{color:"#5555C0"},
  },
}));

const Transpotation = (props) => {
  const classes = useStyles();
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Transpotation</h3>
      <div className="container supermarket__container">
        {TrafficData.map(
          ({ id, Title, Img, Info, Advantages, Disadvantages }) => {
            return (
              <Card
                className={classes.root}
                key={id}
              >
                <CardHeader
                  title={Title}
                  className={classes.typography}
                ></CardHeader>
                <CardMedia className={classes.media} image={Img}></CardMedia>

                <CardContent>
                  <Typography className={classes.typography}>
                    Information:
                    <Link href={Info} className={classes.styleLink}>
                      Click me!
                    </Link>
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography className={classes.typography}>
                    Advantages:{Advantages}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography className={classes.typography}>
                    Disadvantages:{Disadvantages}
                  </Typography>
                </CardContent>
              </Card>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Transpotation;
