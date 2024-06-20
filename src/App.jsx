import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./component/Register/Register";
import CompanyRegister from "./component/CompanyRegister/CompanyRegister";
import CompanyLogin from "./component/CompanyLogin/CompanyLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/CompanyRegister" element={<CompanyRegister />} />
        <Route path="/CompanyLogin" element={<CompanyLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
