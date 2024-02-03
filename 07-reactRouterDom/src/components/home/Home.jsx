import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="w-full h-auto p-10">
            <div className="flex gap-10 flex-col md:flex-row justify-between items-center">
                <div className="">
                    <img className='w-[550px]' src="../../src/assets/workFromHome1.png" alt="img" />
                </div>
                <div className="flex gap-5 flex-col justify-center items-center">
                    <h2 className="text-center font-bold text-3xl">Earn Money Freelacing</h2>
                    <Link
                    to="#"
                    className="px-5 py-3 text-lg font-bold text-white bg-orange-700 rounded-lg hover:bg-gorange-800 focus:ring-4 focus:ring-orange-300"
                    >Join Freelancer</Link>
                </div>
            </div>
            <div className="grid place-content-center py-10 mt-32">
                <img className='w-96' src="../../src/assets/workFromHome2.png" alt="img" />
                <h2 className="text-center my-8 font-bold text-3xl">Enjoy Everyone!</h2>
            </div>
        </div>
    )
}

export default Home;