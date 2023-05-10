import React from "react";
import "./UserForm.css";
import man1 from "../assets/man1.png";
import man2 from "../assets/man2.jpg";
import man3 from "../assets/man3.webp";
import man4 from "../assets/man4.ico";
import woman1 from "../assets/woman1.jpg";
import woman2 from "../assets/woman2.png";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Avatar,
  Stack,
} from "@mui/material";

const UserForm = () => {
  return (
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
      <div>Select Avatar</div>
      <Stack direction="row" spacing={2}>
        <Avatar variants="rounded" src={man1} />
        <Avatar variant="rounded" src={man2} />
        <Avatar variant="rounded" src={man3} />
        <Avatar variant="rounded" src={man4} />
        <Avatar variant="rounded" src={woman1} />
        <Avatar variant="rounded" src={woman2} />
      </Stack>
      <Button className="button" variant="contained">
        Create User
      </Button>
    </div>
  );
};

export default UserForm;
