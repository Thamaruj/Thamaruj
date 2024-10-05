import React from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Header from "./Components/Header section/Header";
import Navbar from "./Components/Nav bar/Nav_bar";
import BodyUpper from "./Components/Body upper/Body upper";
import BodyMiddle from "./Components/Body middle/Body middle";
import AboutUs from "../src/Sub Pages/About Us/AboutUs";
import VolunteerandDonate from "./Sub Pages/Volunteer and Donate/VolunteerAndDonate";
import SuccessStories from "./Sub Pages/Success Stories/Success stories";
import PetShop from "./Sub Pages/Pet Shop/Pet Shop";
import HomePage from "./Homepge/Homepge";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/Thamaruj/" element={<Navigate to="/HomePage"/>}/>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <BodyUpper />
              <BodyMiddle />
            </>
          } 
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/VolunteerAndDonate" element={<VolunteerandDonate />} />
        <Route path="/SuccessStories" element={<SuccessStories/>} />
        <Route path="/PetShop" element={<PetShop/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
