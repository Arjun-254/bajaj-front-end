import React from 'react'
import Threemodel from './Threemodel'

export default function Statement() {
  return (
    <div>
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">

      <div className="flex-col justify-center items-center lg:mx-0">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">StockWatch</h2>
        <p className="mt-2 text-lg text-gray-600">Learn how to grow your Portfolio with our expert Stock Suggestions.</p>
      </div>
      
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
        <article className="flex max-w-xl flex-col items-start justify-between">
          <Threemodel/>
        </article>
        </div>

        <div>
        <article className="flex max-w-xl flex-col items-start justify-between">
          <Threemodel/>
        </article>
        </div>

        <div>
        <article className="flex max-w-xl flex-col items-start justify-between">
          <Threemodel/>
        </article>
        </div>

    </div>
  </div>
</div>
  
    </div>
  )
}
