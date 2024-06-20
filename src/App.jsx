import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyRegister from "./component/CompanyRegister/CompanyRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CompanyRegister" element={<CompanyRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
