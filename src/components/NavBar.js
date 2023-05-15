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
  SvgIcon,
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
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                position: "absolute",
                left: "28.96%",
                right: "26.96%",
                top: "2.37%",
                bottom: "93.34%",
              }}
            >
              <TabList onChange={handleChange} aria-label="Tabs example">
                <Tab label="All Users" value="1" />
                <Tab label="Contributor" value="2" />
                <Tab label="Author" value="3" />
                <Tab label="Administrator" value="4" />
                <Tab label="Subscriber" value="5" />{" "}
              </TabList>
            </Box>
          </TabContext>
          <Button
            variant="contained"
            component={Link}
            to={"/UserForm"}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 20px 12px 15px",
              position: "absolute",
              left: "86.21%",
              background: "#2940D3",
              borderRadius: "4px",
            }}
          >
            <SvgIcon component={AddCircleIcon}></SvgIcon>
            Add New User
          </Button>
        </Toolbar>
      </AppBar>
      <TabContext value={value}>
        <TabPanel value="1">
          <UserTable filterValue="*"></UserTable>
        </TabPanel>
        <TabPanel value="2">
          <UserTable filterValue="Contributor"></UserTable>
        </TabPanel>
        <TabPanel value="3">
          <UserTable filterValue="Author"></UserTable>
        </TabPanel>
        <TabPanel value="4">
          <UserTable filterValue="Administrator"></UserTable>
        </TabPanel>
        <TabPanel value="5">
          <UserTable filterValue="Subscriber"></UserTable>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default NavBar;
