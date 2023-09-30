
import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header";
import Home from "./pages/User/Home/Home";
// import Features from "./pages/User/Features/Features";
import AboutUs from "./pages/User/About us/AboutUs";
import Services from "./pages/User/Services/Services";
import Service from "./pages/User/Services/Service_1/Service";
import ServiceTwo from "./pages/User/Services/Service_2/Service_2";
import ServiceThree from "./pages/User/Services/Service_3/Service_3";
// import ServiceF from "./pages/User/Services/Service_4/Service_4";
import ContactUs from "./pages/User/Contact Us/ContactUs";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
         <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/services" element={<Services/>}>
          <Route path="service" element={<Service/>} />
          <Route path="digital" element={<ServiceTwo/>} />
          <Route path="business" element={<ServiceThree/>} />
          </Route>
        </Routes>
        <Footer /> 
    </div>
  );
}

export default App;

