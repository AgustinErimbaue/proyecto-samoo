import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Register from "./views/Register/Register";
import SupplierRegister from "./views/SupplierRegister/SupplierRegister";
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
import EventsCalendar from "./views/EventsCalendar/EventsCalendar";
import ViewEvents from "./views/ViewEvents/ViewEvents";
import HallsDetail from "./views/Events/Events";
import Landing from "./views/Landing/Landing";
import HallEvents from "./components/HallEvents/HallEvents";
import Shopping from "./views/Shopping/Shopping";
import AssistantDetail from "./components/AssistantDetail/AssistantDetail";
import Dashboard from "./views/Dashboard/Dashboard";
import ChatDetails from "./components/ChatDetails/ChatDetails";
import OneToOne from "./views/OneToOne/OneToOne";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/updateUser" element={<UpdateUser />} />
        <Route path="/SupplierRegister" element={<SupplierRegister />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/UserContact/:id" element={<UserContact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CompanyLogin" element={<CompanyLogin />} />
        <Route path="/BookingMeeting" element={<BookingMeetings />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/" element={<Landing />} />
        <Route path="/hallsdetail" element={<HallsDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/viewparticipants" element={<ViewParticipants />} />
        <Route path="/meetingsViews" element={<MeetingsViews />} />
        <Route path="/eventscalendar" element={<EventsCalendar/>} />
        <Route path="/viewevents" element={<ViewEvents />} />
        <Route path="/hallsdetail/:id" element={<HallEvents />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/assistantdetail" element={<AssistantDetail />} />
        <Route path="/dashboard" element={<Dashboard/>} />  
        <Route path="/OneToOne" element={<OneToOne/>} />  
      </Routes>
      <ChatDetails/>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
