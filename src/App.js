import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./components/list/List";
import Hotel from "./pages/hotel/Hotel";
import AvailabilityPage from "./components/av/AvailabilityPage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import Visa from "./components/visa/Visa";
import Payment from "./components/payment/Payment";
import ConfirmationPage from "./components/conf/ConfirmationPage";
import AirIndia from "./components/airindia/AirIndia";
import Spicejet from "./components/spicejet/Spicejet";
import Indigo from "./components/Indigo/Indigo";
import Emirates from "./components/Emirates/Emirates";
import Abooking from "./components/airindia/ABooking";
import Ebooking from "./components/Emirates/Ebooking";
import Ibooking from "./components/Indigo/Ibooking";
import Sbooking from "./components/spicejet/Sbooking";
import AV from "./components/av1/AV";
import Sj from "./components/list/Sj";
import SearchItem from "./components/searchItem/SearchItem";
import Intro from "./components/Intro/Intro";
import Form from "./components/UserDetail/Form";
import VisaPage from "./components/visa/VisaPAge";
import Contact from "./components/call/Call";
import Header from "./components/header/Header";
import Location from "./pages/location/Location";
import Subscribe from "./pages/Subs";
import VisaRegistration from "./components/visa/VisaRegistration";
import { Map } from "mapbox-gl";
import MapC from "./pages/map/map";
import Airindia from "./components/airindia/AirIndia";
import RescheduleFlight from "./components/conf/Re";
import Hb from "./pages/hotel/hb";
import C from "./pages/hotel/C";
import Re from "./components/conf/Re";
import RHotel from "./pages/hotel/Rh";
import Ahmed from "./pages/hotel/Rh copy";
import Pune from "./pages/hotel/Ph";
import Chennai from "./pages/hotel/Ch";
import Bangalore from "./pages/hotel/Bh";
import Jamshedpur from "./pages/hotel/Jh";
import Delhi from "./pages/hotel/Dh";
import Surat from "./pages/hotel/Sh";
import Hyderabad from "./pages/hotel/Hy";
import Rf from "./components/conf/rf";
import We from "./pages/weather/We";
import Indigo1 from "./components/Indigo/Indigo1";

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sjb" element={<Sj />} />
        <Route path="/aib" element={<AirIndia />} />
        <Route path="/eib" element={<Emirates />} />
        <Route path="/iib" element={<Indigo />} />
        <Route path="/location" element={<Location />} />
        <Route path="/f" element={<Hotel/>} />
        <Route path="/sign" element={< Subscribe/>} />
        <Route path="/registration" element={< VisaRegistration/>} />






        <Route path="/hotel" element={<Hotel />} />

        <Route path="/hotel" element={<Hotel />} />
        <Route path="/hotels" element={<Intro />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/choose-airlines" element={<Hotel />} />
        <Route path="/visa" element={<VisaPage />} />
        <Route path="/visa1" element={<Visa />} />

        <Route path="/id" element={<Visa />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/create" element={<Form />} />
        <Route path="/userInfo" element={<VisaPage />} />
        <Route path="/gotovisa" element={<Visa />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/re" element={<RescheduleFlight />} />
        <Route path="/rf" element={<Rf />} />

        <Route path="/hb" element={<Re />} />
        <Route path="/c" element={<C />} />


        <Route path="/ranchi" element={<RHotel />} />
        <Route path="/ahmedabad" element={<Ahmed />} />
        <Route path="/pune" element={<Pune />} />
        <Route path="/chennai" element={<Chennai />} />
        <Route path="/bangalore" element={<Bangalore />} />
        <Route path="/jamshedpur" element={<Jamshedpur />} />
        <Route path="/delhi" element={<Delhi />} />
        <Route path="/surat" element={<Surat />} />
        <Route path="/hyderabad" element={<Hyderabad />} />
        <Route path="/airindia1" element={<AirIndia1 />} />
        <Route path="/spicejet1" element={<Spicejet1 />} />
        <Route path="/emirates1" element={<Emirates1 />} />
        <Route path="/indigo1" element={<Indigo1 />} />


        <Route path="/flightoptions" element={<Visa />} />
        <Route path="/airindia" element={<AirIndia />} />
        <Route path="/spicejet" element={<Spicejet />} />
        <Route path="/emirates" element={<Emirates />} />
        <Route path="/indigo" element={<Indigo />} />
        <Route path="/airindiabooking" element={<Abooking />} />
        <Route path="/emiratesbooking" element={<Ebooking />} />
        <Route path="/indigobooking" element={<Ibooking />} />
        <Route path="/spicejetbooking" element={<Sbooking />} />
        <Route path="/airindiab" element={<AirIndia />} />
        <Route path="/emiratesb" element={<Emirates />} />
        <Route path="/indigob" element={<Indigo />} />
        <Route path="/spicejetb" element={<Sj />} />
        <Route path="/search" element={<SearchItem />} />
        <Route path="/availability" element={<AvailabilityPage />} />
        <Route path="/av" element={<AV />} />

        <Route path="/more" element={<We/>} />
        <Route path="/aa" element={<Airindia/>} />
        <Route path="/booking" element={<Intro/>} />




        
      </Routes>
    </BrowserRouter>
  );
}

export default App;