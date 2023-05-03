import React from "react";
import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Swap from "../components/Swap";

function HomeScreen() {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <Intro />
      <Swap />
      <div className="h-12"></div>
    </div>
  );
}

export default HomeScreen;
