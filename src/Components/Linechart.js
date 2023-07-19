import React from 'react'
import { Line } from 'react-chartjs-2';


export default function linechart() {
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
        datasets: [
          {
            label: 'Price',
            data: [4, 12, 20, 13, 6,12,14,22,32,23,21,33],
            fill: true,
            borderColor: 'green',
            tension: 0.4,
          },
        ],
      };
      const chartOptions = {
        scales: {
          x: {
            display: true, // Hide x-axis scale and labels
          },
          y: {
            display: true, // Hide y-axis scale and labels
          },
        },
        plugins: {
          legend: {
            display: false, // Hide legend
          },
        },
      };
    
  return (
    <div className='bg-gray-800 px-3 py-2 mx-2 rounded-lg flex flex-col w-full'>
      <div className='flex flex-row justify-start items-center pb-1'>
        <h1 className='text-3xl font-extrabold tracking-tight text-white sm:text-2xl'>Nifty-50</h1>
        <p className="ml-2 text-3xl font-extrabold tracking-tight text-white sm:text-xl bg-gray-700 p-1 rounded-lg">66,500</p>
      </div>
      <Line data={chartData} options={chartOptions} />
    </div>
  )
}
