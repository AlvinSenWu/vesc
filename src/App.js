import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import People from "./components/people"; // Import your People component
import Footer from "./components/footer"





const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People/>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;

