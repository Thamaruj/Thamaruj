import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header section/Header";
import Navbar from "./Components/Nav bar/Nav_bar";
import BodyUpper from "./Components/Body upper/Body upper";
import BodyMiddle from "./Components/Body middle/Body middle";
import AboutUs from "../src/Sub Pages/About Us/AboutUs"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <BodyUpper />
            <BodyMiddle />
          </>
        } />
        <Route path="/about" element={<AboutUs />} /> {/* Route for About Us page */}
      </Routes>
    </Router>
  );
};

export default App;
