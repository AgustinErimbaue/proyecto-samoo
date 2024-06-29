import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Register from "./views/Register/Register";
import CompanyRegister from "./views/CompanyRegister/CompanyRegister";
import CompanyLogin from "./views/CompanyLogin/CompanyLogin";
import Login from "./views/Login/Login";
import BookingMeetings from "./components/BookingMeetings/BookingMeetings";
import NotFound from "./views/NotFound/NotFound";
import Participants from "./components/Participants/Participants";
import Footer from "./components/Footer/Footer";
import ViewParticipants from "./views/ViewParticipants/ViewParticipants";
import UserProfile from "./views/UserProfile/UserProfile";
import UserContact from "./views/UserContact/UserContact";
import UpdateUser from "./views/UpdateUser/UpdateUser";
import MeetingsViews from "./views/MeetingsViews/MeetingsViews";
import ViewEvents from "./views/ViewEvents/ViewEvents";
import HallsDetail from "./views/HallsDetail/HallsDetail";
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
        <Route path="/landing" element={<Landing />} />
        <Route path="/hallsdetail" element={<HallsDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/viewparticipants" element={<ViewParticipants />} />
        <Route path="/meetingsViews" element={<MeetingsViews />} />
        <Route path="/viewevents" element={<ViewEvents />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
