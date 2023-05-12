import { Route, Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import UserForm from "./components/UserForm";
import FormScreen from "./screens/FormScreen";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FormScreen></FormScreen>}></Route>
        <Route path="/NavBar" element={<NavBar></NavBar>}></Route>
        <Route path="/UserForm" element={<UserForm></UserForm>}></Route>
      </Routes>
    </div>
  );
};

export default App;
