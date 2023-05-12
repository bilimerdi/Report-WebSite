import { useState, React } from "react";
import Icon1 from "../assets/icon2.jpg";
import {
  Toolbar,
  AppBar,
  Button,
  Avatar,
  Box,
  Typography,
  Tab,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import UserTable from "./UserTable";

const NavBar = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Button>
            <Avatar variant="rounded" src={Icon1}></Avatar>
          </Button>
          <Typography
            variant="caption"
            fontSize={15}
            sx={{ color: "black", fontWeight: "bold" }}
          >
            Users
          </Typography>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="Tabs example"
                textColor="secondary"
                indicatorColor="secondary"
                cendered
              >
                <Tab label="Tab One" value="1" />
                <Tab label="Tab Two" value="2" />
                <Tab label="Tab Three" value="3" />
                <Tab label="Tab Four" value="4" />
                <Tab label="Tab Five" value="5" />
                <Tab label="Tab Six" value="6" />
              </TabList>
            </Box>
          </TabContext>
        </Toolbar>
      </AppBar>
      <TabContext value={value}>
        <TabPanel value="1">
          <UserTable></UserTable>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
        <TabPanel value="6">Item Six</TabPanel>
      </TabContext>
    </Box>
  );
};

export default NavBar;
