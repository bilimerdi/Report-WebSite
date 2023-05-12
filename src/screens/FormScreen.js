import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FormScreen = () => {
  return (
    <div>
      This is FormScreen
      <button>Merhaba</button>
      <Button variant="contained">Create User</Button>
      <Link to="/UserForm"> click</Link>
    </div>
  );
};

export default FormScreen;
