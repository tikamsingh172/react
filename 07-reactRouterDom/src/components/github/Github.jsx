import React from 'react';

function Github() {
    return (
        <div className="w-full py-28 bg-slate-400 text-slate-800 ">
            <div className="flex flex-col gap-6 justify-center items-center w-3/4 mx-auto bg-slate-300 p-8 rounded-lg ">
                <div className="w-full flex flex-col gap-8 md:flex-row justify-evenly items-center">
                    <div className="">
                        <img className='w-[300px] h-[300px] rounded-full' src="https://avatars.githubusercontent.com/u/117757655?v=4" alt="github_pick" />
                    </div>
                    <div className="">
                        <h2 className="font-extrabold text-3xl sm:text-4xl text-gray-800 tracking-tight mb-2">
                            Github Details:
                        </h2>
                        <p className="font-bold text-lg sm:text-xl text-gray-700">
                            Name: {'Tikam Singh'}
                        </p>
                        <p className="font-bold text-lg sm:text-xl text-gray-700">
                            User Name: {'tikamsinghgithub'}
                        </p>
                        <p className="font-bold text-lg sm:text-xl text-gray-700">
                            Followers: {225}
                        </p>
                        <p className="font-bold text-lg sm:text-xl text-gray-700">
                            Following: {225}
                        </p>
                        <p className="font-bold text-lg sm:text-xl text-gray-700">
                            PublicRepos: {225}
                        </p>
                    </div>
                </div>
                <div className="">
                    <a className='font-bold text-2xl text-slate-900 underline decoration-pink-500 hover:text-orange-600 ' href="https://github.com/tikamsinghgithub" target="_blank" rel="noopener noreferrer">Visit My Github</a>
                </div>
            </div>
        </div>
    )
}

export default Github;