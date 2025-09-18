import React from 'react';
import { useContext, createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");
    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])
const toggleTheme = () => {
    setTheme((prev)=> prev === "dark" ? "light" : "dark")
}
    return (
        <ThemeContext.Provider value={{toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    return useContext(ThemeContext)
}