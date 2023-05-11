import React from "react";
import UserTable from "../components/UserTable";
import NavBar from "../components/NavBar";

const MainScreen = () => {
  return (
    <div>
      <NavBar></NavBar>
      <UserTable></UserTable>
    </div>
  );
};

export default MainScreen;
