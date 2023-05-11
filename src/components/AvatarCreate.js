import React from "react";
import { Avatar, Stack } from "@mui/material";

const AvatarCreate = () => {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>Select Avatar</div>
      <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
        <Avatar
          variant="rounded"
          src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/2e/2e3dc3ce3332709e8ceda9da083f5a0afe9797d5.jpg"
        />
        <Avatar
          variant="rounded"
          src="https://avatars.steamstatic.com/418b05b6c8ac32c4e91ff26e9657db2e1db540b6_full.jpg"
        />
        <Avatar
          variant="rounded"
          src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/db/db1e813230a14e06c3cd05fb4784942a7c2ec732.jpg"
        />
        <Avatar
          variant="rounded"
          src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b3/b3a4725d5456b7f4df5c9a93b6465e56b66f3e73.jpg"
        />
        <Avatar
          variant="rounded"
          src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/05/05607d1073475924122712fce813e745b112b2db.jpg"
        />
        <Avatar
          variant="rounded"
          src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b1/b154c144c014b2b8de8d130c71bccf3d0f23e707.jpg"
        />
      </Stack>
    </div>
  );
};

export default AvatarCreate;
