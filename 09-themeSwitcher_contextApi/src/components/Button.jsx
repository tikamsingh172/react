import React from 'react';
import useTheme from '../contexts/Theme';

function Button() {
    const { theme, lightTheme, darkTheme } = useTheme();

    const handleTheme = (e) => {
        const darkModeStatus = e.target.checked;

        console.log('darkModeStatus: ',darkModeStatus);

        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }

    return (
        <label htmlFor="check" className="w-20 h-10 rounded-full bg-gray-400 dark:bg-slate-800 cursor-pointer
        ring-4 ring-gray-500 dark:ring-slate-900 relative">

            <input
                type="checkbox"
                id="check"
                className="sr-only peer"
                checked={theme === 'dark'}
                onChange={handleTheme}
            />

            <span className="w-8 h-8 rounded-full bg-white absolute left-11 top-1 peer-checked:left-1 duration-300"></span>
        </label>
    )
}

export default Button;