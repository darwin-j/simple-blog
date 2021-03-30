import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

const data = {
  react: require("../images/cam.jpg"),
};

const useStyles = makeStyles({
  card: {
    margin: "30px",
  },
  media: {
    height: "150px",
    width: "200px",
  },
});

function Post() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={data.react.default}
          title="logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            First Blog
          </Typography>

          <Typography variant="body2">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Post;
