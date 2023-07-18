import React, { useState, useEffect } from 'react';
import Stock from '../Components/Stock';
import Navbar from '../Components/Navbar';
import { Typewriter } from 'react-simple-typewriter'
import StockCarousel from '../Components/StockCarousel';
import {motion} from 'framer-motion'
import News from '../Components/News';

export default function Watchlist() {
  
  return (
    <div className="relative flex flex-col md:flex-row min-h-screen bg-gray-900 bg-auto">
      <Navbar />

      <div className="flex flex-col mt-12 p-4 items-left h-screen mb-10 rounded-lg overflow-y-auto overflow-x-hidden sm:w-1/3 bg-gray-800 no-scrollbar">
        <p className="mt-2 text-left text-6xl font-extrabold tracking-tight text-white sm:text-3xl">
          <Typewriter
            words={['Watchlist']}
            cursor
            cursorStyle='.'
            loop={3}
          />
        </p>
        <ul role="list" className="mt-4">
          <Stock />
          <Stock />
          <Stock />
          <Stock />
          <Stock />
        </ul>
      </div>

      <div className='mt-12 mx-2 flex-col justify-evenly sm:w-2/3'>

        <div className='flex flex-row justify-evenly mt-4'>

          <div className='flex flex-col p-2 items-center justify-center sm:w-1/2'>
            <p className="mb-4 mx-4 text-6xl font-extrabold tracking-tight text-white sm:text-3xl">
              Top Gainers
              <span className='text-green-600'>
                <Typewriter
                  words={['']}
                  cursor
                  cursorStyle='%'
                  loop={0}
                />
              </span>
            </p>
            <StockCarousel color="green" />
          </div>

          <div className='flex flex-col p-2 items-center justify-center sm:w-1/2'>
            <p className="mb-4 mx-4 text-6xl font-extrabold tracking-tight text-white sm:text-3xl">
              Top Losers
              <span className='text-red-600'>
                <Typewriter
                  words={['']}
                  cursor
                  cursorStyle='%'
                  loop={0}
                />
              </span>
            </p>
            <StockCarousel color="red" />
          </div>

        </div>
        <h1 className='mt-2 text-6xl font-extrabold tracking-tight text-white sm:text-3xl'>
          News
        </h1>
        <div className='m-2 flex-grow overflow-y-auto overflow-x-hidden no-scrollbar rounded-2xl'>
          <News />
        </div>
      </div>
    </div>
  );
}
