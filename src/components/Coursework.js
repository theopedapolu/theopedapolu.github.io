import React from 'react';

function Coursework() {
    return (
    <div id='Coursework' className='flex flex-col items-center py-7'>
      <h2 className='font-system-ui text-4xl font-semibold'>Selected Coursework</h2>
      <table className='border [&>*:nth-child(even)]:bg-[#f2f2f2] mt-5 text-md'>
        <tr className='border text-lg bg-black text-white'>
          <th>Core</th>
          <th>Systems</th>
          <th>AI/ML</th>
          <th>Math</th>
        </tr>
        <tr className='border'>
          <th className='font-medium px-6'>Data Structures & Algorithms (CS 61B)</th>
          <th className='font-medium px-6'>Computer Architecture (CS 61C)</th>
          <th className='font-medium px-6'>Artificial Intelligence (CS 188)</th>
          <th className='font-medium px-6'>Linear Algebra (Math 110)</th>
        </tr>
        <tr className='border'>
          <th className='font-medium px-6'>Advanced Algorithms (CS 170)</th>
          <th className='font-medium px-6'>Operating Systems (CS 162)</th>
          <th className='font-medium px-6'>Machine Learning (CS 189)</th>
          <th className='font-medium px-6'>Abstract Algebra (Math 113)</th>
        </tr>
        <tr className='border'>
          <th className='font-medium px-6'>Discrete Math & Probability (CS 70)</th>
          <th className='font-medium px-6'>Database Systems (CS 186)</th>
          <th className='font-medium px-6'>Deep Learning (CS 182)</th>
          <th className='font-medium px-6'>Real/Complex Analysis (Math 104 & 185)</th>
        </tr>
        <tr>
          <th className='font-medium px-6'>Circuits & Control Theory (EECS 16A & 16B)</th>
          <th className='font-medium px-6'>Computer Security (CS 161)</th>
          <th className='font-medium px-6'>Computer Vision (CS 180)</th>
          <th className='font-medium px-6'>Numerical Analysis (Math 128)</th>
        </tr>
      </table>
    </div>
    )
}

export default Coursework;