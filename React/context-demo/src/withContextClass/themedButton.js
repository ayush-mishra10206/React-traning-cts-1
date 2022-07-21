import { Component, useContext } from "react";
import { ThemeContext } from "./contextdemo";



export default class ThemedButton extends Component {
    render() {
        const { background, foreground } = this.context;

        return <button
            style={{
                backgroundColor: background,
                color: foreground
            }}
        >click</button>
    }
}