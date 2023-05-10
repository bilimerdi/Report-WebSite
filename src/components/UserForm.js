import React from "react";
import "./UserForm.css";
import { Button, TextField, Select, MenuItem, InputLabel } from "@mui/material";

const UserForm = () => {
  return (
    <div>
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
        <Select label="Role" placeholder="Role">
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
