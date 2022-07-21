


import { createContext, useState } from "react"
import Toolbar from "./toolbar";


const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee",
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222",
    }
}

export const ThemeContext = createContext(themes.light);

export default function ContextApi(){
    const [themeNm , setThemNm] = useState('light');
    const currentThm = themes[themeNm];
    const onChangeSelect = (event) =>{
        setThemNm(event.target.value)
    }
    return <div>
            <select onChange={onChangeSelect} value={themeNm}>
                <option value="light">light</option>
                <option value="dark">Dark</option>
            </select>
            <ThemeContext.Provider value={currentThm}>
                <Toolbar/>
            </ThemeContext.Provider>
        </div>
}