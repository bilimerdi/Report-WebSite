import React from "react";
import "./UserForm.css";
import { Button, TextField, Select, MenuItem, InputLabel } from "@mui/material";

const UserForm = () => {
  return (
    <div className="form">
      <div className="form-border">
        <TextField
          className="input"
          label="Full Name"
          variant="outlined"
        ></TextField>
        <TextField
          className="input"
          label="Username"
          variant="outlined"
        ></TextField>
        <TextField
          className="input"
          label="Email Adress"
          variant="outlined"
        ></TextField>
        <InputLabel>Role</InputLabel>
        <Select label="Role" placeholder="Role" sx={{ width: 150, heiht: 20 }}>
          <MenuItem>Contributor</MenuItem>
          <MenuItem>Subscriber</MenuItem>
          <MenuItem>Author</MenuItem>
          <MenuItem>Administrator</MenuItem>
        </Select>
        <Button className="button" variant="contained">
          Create User
        </Button>
      </div>
    </div>
  );
};

export default UserForm;
