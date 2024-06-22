import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./component/Register/Register";
import CompanyRegister from "./component/CompanyRegister/CompanyRegister";
import CompanyLogin from "./component/CompanyLogin/CompanyLogin";
import Login from './component/Login/Login'
import Calendar from "./component/Calendar/Calendar";
import BookingMeetings from "./component/BookingMeetings/BookingMeetings";
import NotFound from "./component/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login/>} />
        <Route path="/CompanyRegister" element={<CompanyRegister />} />
        <Route path="/CompanyLogin" element={<CompanyLogin />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/BookingMeeting" element={<BookingMeetings/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
