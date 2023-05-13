import React, { useState } from "react";
import { Button, TextField, Select, MenuItem, Stack } from "@mui/material";
import AvatarCreate from "./AvatarCreate";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fullName, userName, email);
    navigate("/NavBar");
  };
  return (
    <form onSubmit={handleSubmit}>
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
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          required
        ></TextField>
        <TextField
          label="Username"
          variant="outlined"
          sx={{ marginBottom: 2 }}
          color="secondary"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          required
        ></TextField>
        <TextField
          label="Email Adress"
          variant="outlined"
          sx={{ marginBottom: 2 }}
          color="secondary"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        ></TextField>
        <div style={{ marginBottom: 10 }}>Role</div>
        <Select label="Role" placeholder="Role" sx={{ marginBottom: 2 }}>
          <MenuItem value={1}>Contributor</MenuItem>
          <MenuItem value={2}>Subscriber</MenuItem>
          <MenuItem value={3}>Author</MenuItem>
          <MenuItem value={4}>Administrator</MenuItem>
        </Select>
        <AvatarCreate></AvatarCreate>
        <Button variant="contained" sx={{ marginBottom: 2 }} type="submit">
          Create User
        </Button>
      </Stack>
    </form>
  );
};

export default UserForm;
