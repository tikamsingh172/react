import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="w-screen h-screen grid place-content-center bg-slate-50">
        <div className='flex gap-4 flex-col justify-center items-center'>
            <h1 className="text-center text-3xl font-bold text-red-600">
                404 Error
            </h1>
            <p className="text-sm text-center">Something Went Wrong!</p>
            <Link className='text-blue-600 hover:text-blue-900 font-bold' to="/">
              Go to home →</Link>
        </div>
    </div>
  )
}

export default NotFound;