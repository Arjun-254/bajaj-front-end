import React from 'react'
import SelectStock from '../Components/SelectStock'
import Navbar from '../Components/Navbar';
import Phone from '../Components/Phone';

export default function Preferences() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full md:flex-row min-h-screen bg-gray-900 pb-6"x>
        <Navbar />
        <div className="overflow-hidden py-12 sm:py-18 w-full">
        <div className="mx-auto w-full px-10 lg:px-14">
          <div className="mx-auto grid max-w-2xl pt-16 grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:p-12 lg:pt-4">
              <div className="lg:max-w-lg justify-between text-center flex flex-col">
                <h1 className='text-3xl font-extrabold tracking-tight text-white sm:text-2xl pt-10 pb-2'>Select Your Portfolio Holdings</h1>
                <SelectStock/>
                <h1 className='text-3xl font-extrabold tracking-tight text-white sm:text-2xl pt-10 pb-2'>Select Your Watchlist Holdings</h1>
                <SelectStock/>
              </div>
            </div>
            <Phone/>
          </div>
        </div>
      </div>
    </div>
  )
}
