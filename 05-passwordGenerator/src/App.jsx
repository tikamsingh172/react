import { useCallback, useEffect, useRef, useState } from "react";

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghihklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);

    let copyPass = ""
    for (let i = 0; i <= 7; i++) {
      copyPass += passwordRef.current?.value[i];
    }
    window.navigator.clipboard.writeText(copyPass);
  }, [password]);


  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg px-4 py-3 mt-12 text-orange-500">
      <h1 className="text-3xl text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          placeholder="Password"
          className="w-full px-3 py-1 outline-none"
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button
          className="bg-blue-700 hover:bg-blue-900 outline-none text-white px-3"
          onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>
      <div className="flex text-sm gap-x-4">
        <div className="flex items-center gap-x-2">
          <input
            className="cursor-pointer"
            type="range"
            id="len"
            min={8}
            max={25}
            value={length}
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label htmlFor="len">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="num"
            defaultChecked={numAllowed}
            onChange={() => { setNumAllowed((prev) => !prev) }}
          />
          <label htmlFor="">Numbers</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="char"
            defaultChecked={charAllowed}
            onChange={() => { setCharAllowed((prev) => !prev) }}
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
