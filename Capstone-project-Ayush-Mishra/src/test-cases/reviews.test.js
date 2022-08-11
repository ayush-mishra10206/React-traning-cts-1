import { fireEvent, render, screen } from "@testing-library/react"
import Reviews from "../Components/Reviews"



describe('<Reviews/>', () => {
    test('testing reviews page ', () => {
        render(<Reviews />)

        const pencilIcon = screen.getByTestId('pencilIcon');
        fireEvent.click(pencilIcon);
        const popFeedbackModal = screen.getByTestId('popFeedbackModal')
        expect(popFeedbackModal).toBeInTheDocument();

    })
})