import { fireEvent, render, screen } from "@testing-library/react"

import Parent1 from './childtoparent';


test('child to parrent ',()=>{
    render(<Parent1/>)
    const childBtn = screen.getByTestId("childBtn");
    const pTag = screen.getByTestId('message')
    fireEvent.click(childBtn)
    expect(pTag).toHaveTextContent('set by child')
})