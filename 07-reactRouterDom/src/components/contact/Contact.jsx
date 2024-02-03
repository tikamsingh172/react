import React from 'react';

function Contact() {
    return (
        <div className="w-full h-auto p-10 my-8 md:my-16">
            <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 place-items-center">
                <div className="self-center max-w-md bg-gray-100 p-6 rounded-lg">
                    <div className="flex flex-col gap-6">
                        <div className="">
                            <h2 className="font-extrabold text-3xl sm:text-4xl text-gray-800 tracking-tight text-center mb-2">
                                Get In Touch:
                            </h2>
                            <p className="font-bold text-lg sm:text-xl text-gray-700">
                                Fill in the form to start a conversation
                            </p>
                        </div>
                        <div className="font-medium  text-gray-700">
                            <p className="">
                                <i className="fa-solid fa-location-dot"></i>
                                &nbsp;&nbsp; Sector-5 Noida UP 201301
                            </p>
                            <p className="my-2">
                                <i className="fa-solid fa-mobile-retro"></i>
                                &nbsp;&nbsp; 8077662051
                            </p>
                            <p className="font-medium  text-gray-700">
                                <i className="fa-solid fa-envelope"></i>
                                &nbsp;&nbsp; tikamsingh172@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm flex flex-col justify-center items-center shadow-xl rounded-lg ">
                    <form className='p-6'>
                        <input
                            type="text"
                            name="fullname"
                            placeholder='Full Name'
                            className='w-full border border-gray-400 rounded-lg font-semibold text-gray-800 focus:border-orange-500 focus:outline-none px-4 py-3'
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            className='w-full border border-gray-400 rounded-lg font-semibold text-gray-800 focus:border-orange-500 focus:outline-none px-4 py-3 my-3'
                        />
                        <input
                            type="tel"
                            name="tel"
                            placeholder='Mobile Number'
                            className='w-full border border-gray-400 rounded-lg font-semibold text-gray-800 focus:border-orange-500 focus:outline-none px-4 py-3
                            mb-4'
                        />
                        <button
                            type="submit"
                            className='w-full md:w-32 bg-orange-500 hover:bg-orange-700 px-4 py-3 font-bold text-white rounded-lg mx-auto block'
                            onClick={(e) => e.preventDefault()}
                        >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;