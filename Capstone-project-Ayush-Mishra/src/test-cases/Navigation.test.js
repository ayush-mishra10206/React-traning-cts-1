import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Navigation from "../Components/Navigation"
import { MemoryRouter } from 'react-router-dom';
import useWindowDimensions from "../Components/window-dimension";
const reactMock = require('react');



describe("<Navigation/>", () => {
    beforeAll(()=>{
        render( <MemoryRouter>
            <Navigation />
        </MemoryRouter>)
    })
    test("Navigation page testing", async () => {
            expect(screen.queryByRole("div", { name: /navData/i })).not.toBeInTheDocument()
    })

})