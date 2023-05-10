import React from "react";
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
  Avatar,
  Stack,
} from "@mui/material";

const UserForm = () => {
  return (
    <Stack
      sx={{
        height: 300,
        width: 320,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        marginTop: 30,
      }}
    >
      <TextField label="Full Name" variant="outlined"></TextField>
      <TextField label="Username" variant="outlined"></TextField>
      <TextField label="Email Adress" variant="outlined"></TextField>
      <div>Role</div>
      <Select label="Role" placeholder="Role">
        <MenuItem value={1}>Contributor</MenuItem>
        <MenuItem value={2}>Subscriber</MenuItem>
        <MenuItem value={3}>Author</MenuItem>
        <MenuItem value={4}>Administrator</MenuItem>
      </Select>
      <div>Select Avatar</div>
      <Stack direction="row" spacing={2}>
        <Avatar variant="rounded" src={man1} />
        <Avatar variant="rounded" src={man2} />
        <Avatar variant="rounded" src={man3} />
        <Avatar variant="rounded" src={man4} />
        <Avatar variant="rounded" src={woman1} />
        <Avatar variant="rounded" src={woman2} />
      </Stack>
      <Button variant="contained">Create User</Button>
    </Stack>
  );
};

export default UserForm;
