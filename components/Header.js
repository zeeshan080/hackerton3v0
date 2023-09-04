import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MealMetrics 🍎
        </Typography>
        <IconButton edge="end" color="inherit">
          <p>Logo</p>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;