import React, { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ userName, password })
        setUserName('');
        setPassword('');
    }
    return (
        <div className="max-w-lg mx-auto my-12 p-10 grid gap-8 grid-cols-1 place-items-center bg-slate-400 rounded-md">
            <h1 className="font-extrabold text-3xl text-orange-500">
                Login
            </h1>
            <form className='w-full' >
                <input
                    className="w-full px-4 py-2"
                    type="text"
                    placeholder='User Name'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <br />
                <input
                    className="w-full px-4 py-2 my-3"
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type='submit'
                    className='bg-orange-500 px-4 py-2 rounded-lg'
                    onClick={handleSubmit}
                >Submit</button>
            </form>
        </div>
    )
}

export default Login;