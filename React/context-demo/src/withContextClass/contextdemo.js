import { Component, createContext } from "react";
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


export const ThemeContext = createContext(themes);

export default class ContextApiClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      themeNm: 'light',
      currentThm: null
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
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar  />
      </ThemeContext.Provider>
    </div>
  }
}