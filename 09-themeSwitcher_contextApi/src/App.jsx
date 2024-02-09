import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import { ThemeProvider } from './contexts/Theme';


function App() {
  const [theme, setTheme] = useState('light');

  const darkTheme = () => {
    setTheme('dark');
  }
  const lightTheme = () => {
    setTheme('light');
  }

  // Actual change in theme
  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove('light', 'dark');
    html.classList.add(theme);
  }, [theme])

  return (
    <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
      <div className="w-full h-screen flex flex-wrap items-center">
        <div className="w-full">
          <div className="max-w-md mx-auto flex justify-center mb-4">
            <Button />
          </div>
          <div className="max-w-md mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App;