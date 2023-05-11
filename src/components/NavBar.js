import React from "react";
import Icon1 from "../assets/icon2.jpg";
import { Box, Toolbar, AppBar, Button, Avatar } from "@mui/material";

const NavBar = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Button>
            <Avatar variant="rounded" src={Icon1}></Avatar>
          </Button>
          <div style={{ color: "black" }}>
            <b>Users</b>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
