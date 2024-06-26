import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./views/Register/Register";
import CompanyRegister from "./views/CompanyRegister/CompanyRegister";
import CompanyLogin from "./views/CompanyLogin/CompanyLogin";
import Login from "./views/Login/Login";
import BookingMeetings from "./components/BookingMeetings/BookingMeetings";
import NotFound from "./views/NotFound/NotFound";
import Participants from "./components/Participants/Participants";
import Suppliers from "./components/Suppliers/Suppliers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CompanyRegister" element={<CompanyRegister />} />
        <Route path="/CompanyLogin" element={<CompanyLogin />} />
        <Route path="/BookingMeeting" element={<BookingMeetings />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
