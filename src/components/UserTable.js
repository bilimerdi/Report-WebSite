import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { Avatar } from "@mui/material";

const columns = [
  { field: "id", headerName: "User ID", width: 150 },
  {
    field: "Avatar",
    headerName: "Avatar",
    width: 150,
    renderCell: (params) => {
      console.log(params);
      return (
        <>
          <Avatar variant="rounded" src={params.row.Avatar} />
        </>
      );
    },
  },
  { field: "Name", headerName: "Name", width: 150 },
  { field: "UserName", headerName: "Username", width: 200 },
  { field: "Email", headerName: "Email", width: 300 },
  { field: "Role", headerName: "Role", width: 150 },
];

const userTableStyles = {
  height: "450px",
};

const UserTable = ({ onError }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://645c033ca8f9e4d6e7790cfe.mockapi.io/api/Users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <DataTable
      rows={users}
      columns={columns}
      loading={!users.length}
      sx={userTableStyles}
    />
  );
};

export default UserTable;
