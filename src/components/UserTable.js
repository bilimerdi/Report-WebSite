import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { Avatar, Button, Stack, SvgIcon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const userTableStyles = {
  height: "450px",
};

const UserTable = () => {
  const [users, setUsers] = useState([]);

  const editUser = (e, row) => {};

  const deleteUser = (e, row) => {
    fetch(`https://645c033ca8f9e4d6e7790cfe.mockapi.io/api/Users/${row.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        fetch("https://645c033ca8f9e4d6e7790cfe.mockapi.io/api/Users")
          .then((response) => response.json())
          .then((json) => setUsers(json));
      });
  };

  const columns = [
    {
      field: "Avatar",
      headerName: "Avatar",
      width: 150,
      renderCell: (params) => {
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
    {
      field: "Edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => {
        return (
          <Stack direction="row">
            <Button onClick={(e) => editUser(e, params.row)}>
              <SvgIcon color="action" component={EditIcon}></SvgIcon>
            </Button>
            <Button onClick={(e) => deleteUser(e, params.row)}>
              <SvgIcon color="action" component={DeleteIcon}></SvgIcon>
            </Button>
          </Stack>
        );
      },
    },
  ];

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
