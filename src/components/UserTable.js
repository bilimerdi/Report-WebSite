import React, { useEffect, useState } from "react";
import { Avatar, Button, Stack, SvgIcon, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UserForm from "./UserForm";
import { DataGrid } from "@mui/x-data-grid";

const userTableStyles = {
  height: "450px",
};

const UserTable = ({ filterValue }) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editValue, setEditValue] = useState([]);
  const [editBool, setEditBool] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const filteredUsers = users.filter(
    (user) =>
      user.UserName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.Email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const editUser = (e, row) => {
    setEditValue(row);
    setEditBool(true);
    const updatedUsers = users.map((user) => {
      if (user.id === row.id) {
        return {
          ...user,
          Name: row.Name,
          UserName: row.UserName,
          Email: row.Email,
          Role: row.Role,
        };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleDeleteRows = () => {
    const deletePromises = selectedRows.map((selectedRow) => {
      const userToDelete = users.find((user) => user.id === selectedRow);
      if (userToDelete) {
        return fetch(
          `https://645c033ca8f9e4d6e7790cfe.mockapi.io/api/Users/${userToDelete.id}`,
          {
            method: "DELETE",
          }
        );
      }
      return null;
    });

    Promise.all(deletePromises)
      .then(() => {
        const newUsers = users.filter(
          (user) => !selectedRows.includes(user.id)
        );
        setUsers(newUsers);
        setSelectedRows([]);
        console.log(newUsers);
      })
      .catch((error) => console.error(error));
  };

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
    fetch(
      `https://645c033ca8f9e4d6e7790cfe.mockapi.io/api/Users?Role=${filterValue}`
    )
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      });
  }, [filterValue]);

  return (
    <div>
      {editBool ? (
        <div>
          <UserForm
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9999,
            }}
            row={editValue}
            boolean={editBool}
          ></UserForm>
        </div>
      ) : (
        <React.Fragment>
          <Stack direction="row">
            <TextField
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearch}
              fullWidth
            ></TextField>
            <Button onClick={handleDeleteRows}>
              <SvgIcon
                sx={{ height: 35, width: 35 }}
                color="action"
                component={DeleteIcon}
              ></SvgIcon>
            </Button>
          </Stack>
          <DataGrid
            onRowSelectionModelChange={(ids) => setSelectedRows(ids)}
            rowSelectionModel={selectedRows}
            rows={filteredUsers}
            columns={columns}
            loading={!users.length}
            sx={userTableStyles}
            checkboxSelection={true}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default UserTable;
