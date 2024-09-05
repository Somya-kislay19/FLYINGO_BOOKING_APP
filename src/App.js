import {
  BrowserRouter,Routes,Route,
} from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<Intro/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
      <Route path="/choose airlines" element={<Hotel/>}/>


      <Route path="/id" element={<Visa />} />

      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/hotels" element={<Intro />} />
      <Route path="/create" element={<Form />} />


      <Route path="/userInfo" element={<Visa />} />
      <Route path="/gotovisa" element={<Visa />} />

      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/confirmation" element={<ConfirmationPage/>} />
      <Route path="/flightoptions" element={<Visa/>} />

      <Route path="/visa" element={<Visa />} />
      <Route path="/airindia" element={<AirIndia/>} />
      <Route path="/spicejet" element={<Spicejet/>} />
      <Route path="/emirates" element={<Emirates/>} />
      <Route path="/indigo" element={<Indigo/>} />
      <Route path="/airindiabooking" element={<Abooking/>} />
      <Route path="/emiratesbooking" element={<Ebooking/>} />
      <Route path="/indigobooking" element={<Ibooking/>} />
      <Route path="/spicejetbooking" element={<Sbooking/>} />
      <Route path="/airindiab" element={<AirIndia />} />
        <Route path="/emiratesb" element={<Emirates />} />
        <Route path="/indigob" element={<Indigo />} />

        <Route path="/spicejetb" element={<Sj />} />








    </Routes>
    </BrowserRouter>
  );
}

export default App;
