import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  Stack,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserForm = ({ row, boolean }) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [editBool, setEditBool] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setEditBool(boolean);
  }, [boolean]);
  const handleAvatarClick = (src) => {
    setSelectedAvatar(src);
  };

  const editUser = () => {
    const template = {
      Avatar: selectedAvatar,
      Name: fullName,
      UserName: userName,
      Email: email,
      Role: role,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(template),
    };
    fetch(
      `https://645c033ca8f9e4d6e7790cfe.mockapi.io/api/Users/${row.id}`,
      requestOptions
    ).then((response) => response.json());
    navigate("/NavBar");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Avatar: selectedAvatar,
      Name: fullName,
      UserName: userName,
      Email: email,
      Role: role,
    };
    fetch("https://645c033ca8f9e4d6e7790cfe.mockapi.io/api/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());

    navigate("/");
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
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
          marginTop: 10,
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
        <Select
          label="Role"
          placeholder="Role"
          value={role}
          onChange={handleRoleChange}
          sx={{ marginBottom: 2 }}
          required
        >
          <MenuItem value="Contributor">Contributor</MenuItem>
          <MenuItem value="Subscriber">Subscriber</MenuItem>
          <MenuItem value="Author">Author</MenuItem>
          <MenuItem value="Administrator">Administrator</MenuItem>
        </Select>
        <div>
          <div style={{ marginBottom: 10 }}>Select Avatar</div>
          <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
            <Avatar
              variant="rounded"
              src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/2e/2e3dc3ce3332709e8ceda9da083f5a0afe9797d5.jpg"
              onClick={() =>
                handleAvatarClick(
                  "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/2e/2e3dc3ce3332709e8ceda9da083f5a0afe9797d5.jpg"
                )
              }
            />
            <Avatar
              variant="rounded"
              src="https://avatars.steamstatic.com/418b05b6c8ac32c4e91ff26e9657db2e1db540b6_full.jpg"
              onClick={() =>
                handleAvatarClick(
                  "https://avatars.steamstatic.com/418b05b6c8ac32c4e91ff26e9657db2e1db540b6_full.jpg"
                )
              }
            />
            <Avatar
              variant="rounded"
              src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/db/db1e813230a14e06c3cd05fb4784942a7c2ec732.jpg"
              onClick={() =>
                handleAvatarClick(
                  "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/db/db1e813230a14e06c3cd05fb4784942a7c2ec732.jpg"
                )
              }
            />
            <Avatar
              variant="rounded"
              src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b3/b3a4725d5456b7f4df5c9a93b6465e56b66f3e73.jpg"
              onClick={() =>
                handleAvatarClick(
                  "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b3/b3a4725d5456b7f4df5c9a93b6465e56b66f3e73.jpg"
                )
              }
            />
            <Avatar
              variant="rounded"
              src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/05/05607d1073475924122712fce813e745b112b2db.jpg"
              onClick={() =>
                handleAvatarClick(
                  "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/05/05607d1073475924122712fce813e745b112b2db.jpg"
                )
              }
            />
            <Avatar
              variant="rounded"
              src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b1/b154c144c014b2b8de8d130c71bccf3d0f23e707.jpg"
              onClick={() =>
                handleAvatarClick(
                  "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b1/b154c144c014b2b8de8d130c71bccf3d0f23e707.jpg"
                )
              }
            />
          </Stack>
        </div>
        {editBool ? (
          <Button
            variant="contained"
            sx={{ marginBottom: 2 }}
            onClick={editUser}
          >
            Edit User
          </Button>
        ) : (
          <Button variant="contained" sx={{ marginBottom: 2 }} type="submit">
            Create User
          </Button>
        )}
      </Stack>
    </form>
  );
};

export default UserForm;
