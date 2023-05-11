import React from "react";
import Icon1 from "../assets/icon2.jpg";
import { Stack, Toolbar, AppBar, Button, Avatar, Box } from "@mui/material";
import RoleTabs from "./RoleTabs";

const NavBar = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Button>
            <Avatar variant="rounded" src={Icon1}></Avatar>
          </Button>
          <div style={{ color: "black", paddingRight: "300px" }}>
            <b>Users</b>
          </div>
          <RoleTabs></RoleTabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
