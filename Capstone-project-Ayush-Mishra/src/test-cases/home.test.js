import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import Home from "../pages/Home"
import { store } from "../redux/store"




describe("<Home/>", () => {
    test("home page testing", () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )
    })
})