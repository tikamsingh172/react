import React from 'react';
import img from '../assets/laptop.jpg';

function Card() {
  return (
    <div className="w-full p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="px10 pb-8">
      <img className='rounded-lg ' src={img} alt="laptop-img" />
      </div>
      <div className="flex flex-col">
        <h2 className="font-semibold text-xl text-gray-900 tracking-tight dark:text-white">DELL Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home)</h2>
        <p className="text-xl font-semibold text-yellow-300">★ ★ ★ ★ <span className='text-gray-300 dark:text-gray-600'>★</span> <span className='font-semibold text-xs bg-blue-100 dark:bg-blue-200 rounded text-blue-800 px-1 py-0.5 '>4.0</span></p>
        <div className="flex justify-between">
          <span className='font-extrabold text-2xl text-gray-800 dark:text-white'>₹ 39,999</span>
          <button className='px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-800 font-semibold text-white'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card;