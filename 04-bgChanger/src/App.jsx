import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState('olive');
  return (
    <div className="w-full h-screen duratioration-200"
      style={{ backgroundColor: bgColor }}>
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white rounded-3xl shadow-lg px-3 py-2">
          <button
            className="px-4 py-2 rounded-full outline-none shadow-lg text-white"
            style={{ backgroundColor: 'red' }}
            onClick={() => setBgColor('red')}
          >Red</button>
          <button
            className="px-4 py-2 rounded-full outline-none shadow-lg text-white"
            style={{ backgroundColor: 'blue' }}
            onClick={() => setBgColor('blue')}
          >Blue</button>
          <button
            className="px-4 py-2 rounded-full outline-none shadow-lg text-white"
            style={{ backgroundColor: 'green' }}
            onClick={() => setBgColor('green')}
          >Green</button>
          <button
            className="px-4 py-2 rounded-full outline-none shadow-lg text-white"
            style={{ backgroundColor: 'yellow' }}
            onClick={() => setBgColor('yellow')}
          >Yellow</button>
          <button
            className="px-4 py-2 rounded-full outline-none shadow-lg text-white"
            style={{ backgroundColor: 'black' }}
            onClick={() => setBgColor('black')}
          >Black</button>
          <button
            className="px-4 py-2 rounded-full outline-none shadow-lg text-white"
            style={{ backgroundColor: 'orange' }}
            onClick={() => setBgColor('orange')}
          >Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
