import { useState, React } from "react";
import Icon1 from "../assets/icon2.jpg";
import UserForm from "./UserForm";
import {
  Toolbar,
  AppBar,
  Button,
  Avatar,
  Box,
  Typography,
  Tab,
  Icon,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import UserTable from "./UserTable";
import { Link } from "react-router-dom";

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
                <Tab label="All Users" value="1" />
                <Tab label="Contributor" value="2" />
                <Tab label="Author" value="3" />
                <Tab label="Adminstrator" value="4" />
                <Tab label="Subscriber" value="5" />{" "}
              </TabList>
            </Box>
          </TabContext>
          <Button component={Link} to={"/UserForm"}>
            Add New User
          </Button>
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
      </TabContext>
    </Box>
  );
};

export default NavBar;
