import React from 'react'
import Card from './components/Card'

function App() {
  const languagesArry = ["javascript", "react"];
  const userObj = { name: "ram", age: 40 };

  return (
    <>
      <h1 className='text-center mt-10 text-3xl font-bold'>Props in React js</h1>
      <div className='flex gap-5 m-10 justify-center'>
        <Card username="Vishal Verma" btnTxt="Visit Profile" />
        <Card username="Rohit Singh" languages={["html", "css"]} user={{ name: "rajat", age: 30 }} />
        <Card username="Rohit Singh" languages={languagesArry} user={userObj} />
      </div>
    </>
  )
}

export default App