import React from "react";
import man1 from "../assets/man1.png";
import man2 from "../assets/man2.jpg";
import man3 from "../assets/man3.webp";
import man4 from "../assets/man4.ico";
import woman1 from "../assets/woman1.jpg";
import woman2 from "../assets/woman2.png";
import { Avatar, Stack } from "@mui/material";

const AvatarCreate = () => {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>Select Avatar</div>
      <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
        <Avatar variant="rounded" src={man1} />
        <Avatar variant="rounded" src={man2} />
        <Avatar variant="rounded" src={man3} />
        <Avatar variant="rounded" src={man4} />
        <Avatar variant="rounded" src={woman1} />
        <Avatar variant="rounded" src={woman2} />
      </Stack>
    </div>
  );
};

export default AvatarCreate;
