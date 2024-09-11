import React from "react";
import Header from "./Components/Header section/Header";
import Navbar from "./Components/Nav bar/Nav_bar";
import BodyUpper from "./Components/Body upper/Body upper";
import BodyMiddle from "./Components/Body middle/Body middle";

const App =() =>{
  return(
    <div>
      <Navbar/>
      <Header/>
      <BodyUpper/>
      <BodyMiddle/>
    </div>
  )
}

export default App