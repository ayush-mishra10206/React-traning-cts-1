import { render, screen } from "@testing-library/react"
import About from "../pages/About"




describe('<AboutUs/>',()=>{
    test('testing about us page',()=>{
        render(<About/>)
        const testingBoutUs = screen.getByTestId('testingBoutUs')
        expect(testingBoutUs).toHaveTextContent('Our History')
    })
})