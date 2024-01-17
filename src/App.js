import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home} from "./screens";

import { Footer, Navbar} from './components';
import ContactUs from "./components/ContactUs";
import Plans from "./screens/Plans";
import OurServices from "./screens/OurServices";

import About from "./screens/About";
import Carrier from "./screens/Career";
import Payment from "./screens/Payment";
import TermsPage from "./screens/TermPage";
import Policy from "./screens/PrivacyPolicy";

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
       
    
        <Route path="/services" element={<OurServices />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<Policy />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/otp-verify" element={<OtpScreen />} /> */}
        {/* <Route path="/otptwilio" element={<OtpVerificationForm />} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
