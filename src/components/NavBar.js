import React from "react";
import Icon1 from "../assets/icon2.jpg";
import {
  Stack,
  Toolbar,
  AppBar,
  Button,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import RoleTabs from "./RoleTabs";

const NavBar = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Button>
            <Avatar variant="rounded" src={Icon1}></Avatar>
          </Button>
          <Typography
            variant="caption"
            sx={{ color: "black", fontWeight: "bold" }}
          >
            Users
          </Typography>
          <RoleTabs></RoleTabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
