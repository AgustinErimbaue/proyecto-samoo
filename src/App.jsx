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
import Footer from "./components/Footer/Footer";
import Speakers from "./components/Speakers/Speakers";
import Assistants from "./components/Assistants/Assistants";
import ViewParticipants from "./views/ViewParticipants/ViewParticipants";
import UserProfile from "./component/UserProfile/UserProfile";
import UserContact from "./component/UserContact/UserContact";
import UpdateUser from "./component/UpdateUser/UpdateUser";
import Halls from "./views/Halls/Halls";
import Landing from "./views/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/updateUser" element={<UpdateUser />} />
        <Route path="/CompanyRegister" element={<CompanyRegister />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/UserContact/:id" element={<UserContact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CompanyLogin" element={<CompanyLogin />} />
        <Route path="/BookingMeeting" element={<BookingMeetings />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/halls" element={<Halls />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/viewparticipants" element={<ViewParticipants />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
