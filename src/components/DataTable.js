import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, SvgIcon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DataTable = ({ rows, columns, loading, sx }) => {
  const [pageSize, setPageSize] = useState(2);
  const [users, setUsers] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const handleDeleteRows = () => {
    console.log(selectedRows);
    const deletePromises = selectedRows.map((row) => {
      return fetch(
        `https://645c033ca8f9e4d6e7790cfe.mockapi.io/api/Users/${row.id}`,
        {
          method: "DELETE",
        }
      );
    });

    Promise.all(deletePromises)
      .then(() => {
        const newUsers = users.filter((user) => !selectedRows.includes(user));
        setUsers(newUsers);
        setSelectedRows([]);
      })
      .catch((error) => console.error(error));
  };

  const handleSelectionModelChange = (newSelection) => {
    setSelectedRows(newSelection);
  };

  return (
    <>
      <Button onClick={handleDeleteRows}>
        <SvgIcon
          sx={{ height: 35, width: 35 }}
          color="action"
          component={DeleteIcon}
        ></SvgIcon>
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        sx={sx}
        checkboxSelection
        pagination
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[2, 5, 10]}
        onRowSelectionModelChange={handleSelectionModelChange}
        selectionModel={selectedRows}
      />
    </>
  );
};

export default DataTable;
