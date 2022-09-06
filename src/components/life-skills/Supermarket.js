import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Link } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import SuperMarketData from "./SupurMarketData";
import "./supermarket.css";
/** This component will import SuperMarketData from SuperMarketData.js, and used map to show supermarket data one by one.  Use the Card in the material ui to display data.
 *
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
      backgroundColor:"#7d7dd7",
      color:"#ffffff"
    }
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  styleLink: {
    color:"#7d7dd7", //Don't know why this doesn't work.
    "&&:hover":{
      color:"#ffffff"
    }
  },
  typography: {
    fontFamily: "Poppins",
    color:"#4A4A4A",
    link:{color:"#5555C0"},
    "&&:hover":{
      color:"#ffffff"
    }
  },
}));

const Supermarket = (props) => {
  const classes = useStyles();
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>SupurMarket</h3>
      <div className="container supermarket__container">
        {SuperMarketData.map(
          ({ id, Title, Img, location, Features, Discount }) => {
            return (
              <Card className={classes.root} key={id}>
                <CardHeader
                  title={Title}
                  className={classes.typography}
                ></CardHeader>
                <CardMedia className={classes.media} image={Img}></CardMedia>

                <CardContent>
                  <Typography  className={classes.typography}>
                    Location:
                    <Link href={location} className={classes.styleLink}>
                      Search '{Title}' in Google map
                    </Link>
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography className={classes.typography}>
                    Features:{Features}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography className={classes.typography}>
                    Discount:{Discount}
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

export default Supermarket;
