import { fireEvent, render, screen } from "@testing-library/react"
import RatingModal from "../Components/RatingModal"


describe('<RatingModal/>',()=>{
    test('testing frown Button',()=>{
        render(<RatingModal/>)
        const frownBtn = screen.getByTestId('frownIcon');
        const emojiData = screen.getByTestId('emojiData');

        fireEvent.click(frownBtn)
        expect(emojiData).toHaveTextContent('frown')
    })
    test('testing less Button',()=>{
        render(<RatingModal/>)
        const frownBtn = screen.getByTestId('lessIcon');
        const emojiData = screen.getByTestId('emojiData');

        fireEvent.click(frownBtn)
        expect(emojiData).toHaveTextContent('less')
    })
    test('testing neutal Button',()=>{
        render(<RatingModal/>)
        const frownBtn = screen.getByTestId('neutralIcon');
        const emojiData = screen.getByTestId('emojiData');

        fireEvent.click(frownBtn)
        expect(emojiData).toHaveTextContent('neutral')
    })
    test('testing smile Button',()=>{
        render(<RatingModal/>)
        const frownBtn = screen.getByTestId('smileIcon');
        const emojiData = screen.getByTestId('emojiData');

        fireEvent.click(frownBtn)
        expect(emojiData).toHaveTextContent('smile')
    })
    test('testing laugh Button',()=>{
        render(<RatingModal/>)
        const frownBtn = screen.getByTestId('laughIcon');
        const emojiData = screen.getByTestId('emojiData');
        fireEvent.click(frownBtn)
        expect(emojiData).toHaveTextContent('laughing')
    })
})