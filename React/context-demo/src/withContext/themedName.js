import { useContext } from "react";
import { ThemeContext } from "./contextApi";



export default function ThemedName(){
    const {background, foreground} = useContext(ThemeContext);
    return <button style={{
        backgroundColor:background,
        color:foreground
    }}>
        click
    </button>

}