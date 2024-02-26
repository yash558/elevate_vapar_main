import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './screens'

import { Footer, Navbar } from './components'
import ContactUs from './components/ContactUs'
import Plans from './screens/Plans'
import OurServices from './screens/OurServices'

import About from './screens/About'
import Carrier from './screens/Career'
import Payment from './screens/Payment'
import TermsPage from './screens/TermPage'
import Policy from './screens/PrivacyPolicy'
import Marketing from './screens/Marketing'
import Content from './screens/Content'
import Brand from './screens/Brand'
import WebDesign from './screens/WebDesign'
import Design from './screens/Design'

function App() {
  return (
    <div className="App">
      <Navbar />
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
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/content" element={<Content />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/webservices" element={<WebDesign />} />
        <Route path="/design" element={<Design />} />

        {/* <Route path="/otp-verify" element={<OtpScreen />} /> */}
        {/* <Route path="/otptwilio" element={<OtpVerificationForm />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
