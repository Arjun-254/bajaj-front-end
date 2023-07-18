import React from 'react'
import Navbar from '../Components/Navbar';
import Statement from '../Components/Statement';
import Stats from '../Components/Stats';


export default function Landing() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-full h-max p-10"> 
      <Navbar />
      <div className="flex-grow">
        <Statement />
        <Stats/>
      </div>
    </div>
  
  )
}
