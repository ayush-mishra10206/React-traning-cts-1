import { fireEvent, render, screen } from "@testing-library/react"
import Parent from "./parenttochild"


test('parent to child',()=>{
    render(<Parent/>)
    const parentBtn = screen.getByTestId('parentBtn');
    const messageChild = screen.getByTestId('childmessage');
    fireEvent.click(parentBtn);
    expect(messageChild).toHaveTextContent('words in child component')
})