import React from "react";
import Navbar from "../Components/Navbar";
import Statement from "../Components/Statement";
import Stats from "../Components/Stats";
import Carousel from "../Components/Carousel";

export default function Landing() {
  return (
    <div className="flex flex-col bg-blue-100 bg-full h-max p-10">
      <Navbar />
      <div className="flex-grow">
        <Statement />
        <Carousel />
      </div>
    </div>
  );
}
