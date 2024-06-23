import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./component/Register/Register";
import CompanyRegister from "./component/CompanyRegister/CompanyRegister";
import CompanyLogin from "./component/CompanyLogin/CompanyLogin";
import Login from './component/Login/Login'
import UserProfile from "./component/UserProfile/UserProfile";
import UserContact from "./component/UserContact/UserContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login/>} />
        <Route path="/CompanyRegister" element={<CompanyRegister />} />
        <Route path="/CompanyLogin" element={<CompanyLogin />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/UserContact/:id" element={<UserContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
