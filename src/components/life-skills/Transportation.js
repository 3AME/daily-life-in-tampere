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
    // maxWidth: 1000,
    width: 350,
    height: 510,
    marginTop: "2rem",
    borderRadius: "16px",
    color: "#fffff",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
                style={{
                  backgroundColor: "#eec6c6",
                  color: "#40005d",
                  fontFamily: "Poppins",
                }}
              >
                <CardHeader
                  title={Title}
                  style={{ fontFamily: "Poppins" }}
                ></CardHeader>
                <CardMedia className={classes.media} image={Img}></CardMedia>

                <CardContent>
                  <Typography style={{ fontFamily: "Poppins" }}>
                    Information:
                    <Link href={Info} style={{ fontFamily: "Poppins" }}>
                      Click me!
                    </Link>
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography style={{ fontFamily: "Poppins" }}>
                    Advantages:{Advantages}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography style={{ fontFamily: "Poppins" }}>
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
