import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import UserForm from "./components/UserForm";
import MainScreen from "./screens/MainScreen";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainScreen></MainScreen>}></Route>
        <Route path="/NavBar" element={<NavBar></NavBar>}></Route>
        <Route path="/UserForm" element={<UserForm></UserForm>}></Route>
      </Routes>
    </div>
  );
};

export default App;
