import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function nav() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Simple Blog</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default nav;
