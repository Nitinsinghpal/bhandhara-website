import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AddPost from "./Components/AddPost";
import About from "./Components/About";
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
          
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
