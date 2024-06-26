import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Register from "./views/Register/Register";
import CompanyRegister from "./views/CompanyRegister/CompanyRegister";
import CompanyLogin from "./views/CompanyLogin/CompanyLogin";
import Login from "./views/Login/Login";
import BookingMeetings from "./components/BookingMeetings/BookingMeetings";
import NotFound from "./views/NotFound/NotFound";
import Participants from "./components/Participants/Participants";
import Suppliers from "./components/Suppliers/Suppliers";
import Speakers from "./views/Speakers/Speakers";
import Assistants from "./views/Assistants/Assistants";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CompanyRegister" element={<CompanyRegister />} />
        <Route path="/CompanyLogin" element={<CompanyLogin />} />
        <Route path="/BookingMeeting" element={<BookingMeetings />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/assistants" element={<Assistants />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
