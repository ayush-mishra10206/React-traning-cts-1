import { Component } from "react";
import Toolbar from "./toolbar";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export default class ContextDemoClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      themeNm: 'light',
      currentThm:null
    }
  }
  
  onChangeThemeName = (event) => {
    this.setState({ themeNm: event.target.value })
  }
  
  

  render() {
    return <div>
      <select
        onChange={this.onChangeThemeName}
        value={this.state.themeNm}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <Toolbar theme={themes[this.state.themeNm]} />
    </div>
  }
}