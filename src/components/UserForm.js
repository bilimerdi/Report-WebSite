import React from "react";
import { Button, TextField, Select, MenuItem, Stack } from "@mui/material";
import AvatarCreate from "./AvatarCreate";
import { Link } from "react-router-dom";

const UserForm = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#F5F5F5",
        height: 450,
        width: 320,
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        marginTop: 20,
        border: 1,
        borderColor: "black",
        padding: 5,
        borderRadius: "2%",
      }}
    >
      <TextField
        label="Full Name"
        variant="outlined"
        sx={{ marginBottom: 2 }}
        color="secondary"
      ></TextField>
      <TextField
        label="Username"
        variant="outlined"
        sx={{ marginBottom: 2 }}
        color="secondary"
      ></TextField>
      <TextField
        label="Email Adress"
        variant="outlined"
        sx={{ marginBottom: 2 }}
        color="secondary"
      ></TextField>
      <div style={{ marginBottom: 10 }}>Role</div>
      <Select label="Role" placeholder="Role" sx={{ marginBottom: 2 }}>
        <MenuItem value={1}>Contributor</MenuItem>
        <MenuItem value={2}>Subscriber</MenuItem>
        <MenuItem value={3}>Author</MenuItem>
        <MenuItem value={4}>Administrator</MenuItem>
      </Select>
      <AvatarCreate></AvatarCreate>
      <Button
        variant="contained"
        component={Link}
        to={"/NavBar"}
        sx={{ marginBottom: 2 }}
      >
        Create User
      </Button>
    </Stack>
  );
};

export default UserForm;
