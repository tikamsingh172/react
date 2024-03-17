// This component copy from:https://www.devui.io/components/cards
import React from 'react'

 function Card({username,btnTxt="View Profile",languages,user}) {
    console.log(username,"\n",btnTxt,"\n",languages,"\n",user);
  return (
    <div className="border border-gray-400 p-4 relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_640.png"
        alt="user-pick"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnTxt}
        </button>
      </div>
    </div>
  )
}
export default Card;