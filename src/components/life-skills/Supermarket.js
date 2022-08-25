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

const Supermarket = (props) => {
  const classes = useStyles();
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>SupurMarket</h3>
      <div className="container supermarket__container">
        {SuperMarketData.map(
          ({ id, Title, Img, location, Features, Discount }) => {
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
                  <Typography>
                    Location:
                    <Link href={location} style={{ fontFamily: "Poppins" }}>
                      Search '{Title}' in Google map
                    </Link>
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography style={{ fontFamily: "Poppins" }}>
                    Features:{Features}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography style={{ fontFamily: "Poppins" }}>
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
