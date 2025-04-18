import { createContext } from "react";
import { useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

export const ThemeContext = createContext()

export default function ThemeContextProvider({children}){

    const [theme, setTheme] = useLocalStorage('theme', 'light')
    
    const toggleTheme = ()=>{
          setTheme(theme === 'light'? 'black' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}