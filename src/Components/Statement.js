import React from 'react'
import Threemodel from './Threemodel'
import { Typewriter } from 'react-simple-typewriter'

export default function Statement() {
  return (
    <div className="overflow-hidden py-12 sm:py-18 ">
    <div className="mx-auto max-w-7xl px-10 lg:px-14">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
        <div className="lg:pl-12 h-screen flex items-center justify-center pb-44">
          <div className="lg:max-w-lg">
            <h2 className="md:text-2xl text-3xl font-bold leading-7 text-black">Teaching Machines to Learn</h2>
            <p className="mt-1 md:text-9xl font-bold flex justify-center items-center tracking-tight bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-9xl">Synapse</p>
            <dl className="mt-10 max-w-9xl space-y-8 text-base leading-7 text-slate-200 lg:max-w-none">
            
            <p className="mt-1 md:text-xl font-bold flex justify-center items-center tracking-tight bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent text-xl"><Typewriter
            words={['The official Machine Learning Committe of DJSCE.']}
            cursor
            cursorStyle='.'
            loop={0}
          /></p>
            </dl>
          </div>
        </div>
        <Threemodel/>
      </div>
    </div>
  </div>
  
  )
}

