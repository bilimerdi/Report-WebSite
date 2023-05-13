import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { SvgIcon, Button } from "@mui/icons-material";

const DataTable = ({ rows, columns, loading, sx }) => {
  const [pageSize, setPageSize] = useState(2);

  return (
    <>
      <Button>
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
      />
    </>
  );
};

export default DataTable;
