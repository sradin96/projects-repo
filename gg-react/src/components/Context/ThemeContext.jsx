import React, { createContext, useState } from 'react'
import useLocalStorageState from '../Hooks/useLocalStorage';

const ThemeContext = createContext({
  theme: '',
  handleTheme: () => {}
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useLocalStorageState('theme', 'dark');


  const handleTheme = () => {
    if(theme === 'dark') {
        setTheme('light')
    } else {
        setTheme('dark')
    }
  }

  const context = {
    theme: theme,
    handleTheme: handleTheme
  }

  return (
      <ThemeContext.Provider value={context}>
          {props.children}
      </ThemeContext.Provider>
  )
}

export default ThemeContext;