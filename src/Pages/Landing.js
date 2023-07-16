import React from 'react'
import Navbar from '../Components/Navbar';
import Statement from '../Components/Statement';

export default function Landing() {
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center items-center'>
            <Statement/>
        </div>
        
    </div>
  )
}
