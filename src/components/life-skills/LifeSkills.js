import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Link } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import SuperMarketData from "./SupurMarketData";
import "./supermarket.css";
import TranspotationData from './TransportationData';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 1000,
    width: 350,
    height: 510,
    marginTop: "2rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function LifeSkills() {
  const classes = useStyles();
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>SupurMarket</h3>
      <div className="container supermarket__container">
        {SuperMarketData.map(({ Title, Img, location, Features, Discount }) => {
          return (
            <Card className={classes.root}>
              <CardHeader title={Title}></CardHeader>
              <CardMedia className={classes.media} image={Img}></CardMedia>

              <CardContent>
                <Typography>
                  Location:
                  <Link href={location}>Search '{Title}' in Google map</Link>
                </Typography>
              </CardContent>
              <CardContent>
                <Typography>Features:{Features}</Typography>
              </CardContent>
              <CardContent>
                <Typography>Discount:{Discount}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <h3 style={{ textAlign: "center" }}>Transpotation</h3>
      <div className="container supermarket__container">
        {TranspotationData.map(({ Title, Img, Info, Advantages, Disadvantages }) => {
          return (
            <Card className={classes.root}>
              <CardHeader title={Title}></CardHeader>
              <CardMedia className={classes.media} image={Img}></CardMedia>

              <CardContent>
                <Typography>
                  Information:
                  <Link href={Info}>Click me!</Link>
                </Typography>
              </CardContent>
              <CardContent>
                <Typography>Advantages:{Advantages}</Typography>
              </CardContent>
              <CardContent>
                <Typography>Disadvantages:{Disadvantages}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default LifeSkills;
