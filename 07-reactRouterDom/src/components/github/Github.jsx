import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/tikamsingh172")
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log("github-data:", data);
    //             setData(data);
    //         })
    //         .catch(err => console.log(err.message))
    // }, [])

    return (
        <div className="w-full py-28 bg-slate-400 text-slate-800 ">
            <div className="flex flex-col gap-6 justify-center items-center w-3/4 mx-auto bg-slate-300 p-8 rounded-lg ">
                <div className="w-full flex flex-col gap-8 md:flex-row justify-evenly items-center">
                    <div className="">
                        <img className='w-[300px] h-[300px] rounded-full' src={data.avatar_url} alt="github_pick" />
                    </div>
                    <div className="">
                        <h2 className="font-extrabold text-3xl sm:text-4xl text-gray-800 tracking-tight mb-2">
                            Github Details:
                        </h2>
                        <p className="font-bold text-lg sm:text-xl text-gray-700">
                            Name: {data.name}
                        </p>
                        <p className="font-bold text-lg sm:text-xl text-gray-700">
                            Username: {data.login}
                        </p>
                        <p className="font-bold text-lg sm:text-xl text-gray-700">
                            Followers: {data.followers}
                        </p>
                        <p className="font-bold text-lg sm:text-xl text-gray-700">
                            Following: {data.following}
                        </p>
                        <p className="font-bold text-lg sm:text-xl text-gray-700">
                            PublicRepos: {data.public_repos}
                        </p>
                    </div>
                </div>
                <div className="">
                    <a className='font-bold text-2xl text-slate-900 underline decoration-pink-500 hover:text-orange-600 ' href="https://github.com/tikamsingh172" target="_blank" rel="noopener noreferrer">Visit My Github</a>
                </div>
            </div>
        </div>
    )
}

export default Github;


export const githubInfoLoader = async () => {
    try {
        const res = await fetch("https://api.github.com/users/tikamsingh172")
        return res.json();
    } catch (error) {
        console.log(error.message);
    }
}