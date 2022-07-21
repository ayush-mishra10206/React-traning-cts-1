import { Component } from "react";



export default class ThemedButton extends Component {
    render() {
        const { background, foreground } = this.props.theme;

        return <button
            style={{
                backgroundColor: background,
                color: foreground
            }}
        >click</button>
    }
}