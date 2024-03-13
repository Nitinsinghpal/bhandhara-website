import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AddPost from "./Components/AddPost";
import About from "./Components/AboutUs/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermOfService from "./Components/TermOfService/TermOfService";

function App() {
  return (
    <div className="app-main">
      <div className="app-main-comp">
        <BrowserRouter>
      <Navbar />
          <Routes>
             {/* <Route element={<Navbar/>}/> */}
              <Route path="/" element={<Home />} />
              <Route path="/addPost" element={<AddPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermOfService />} />

          
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
