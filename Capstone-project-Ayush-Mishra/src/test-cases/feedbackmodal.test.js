import { fireEvent, render, screen } from "@testing-library/react"
import FeedbackModal from "../Components/feedbackmodal"



describe('<feedbackModal/>',()=>{

    const closeFeedbackModal = jest.fn();
    const onClickNextBtnData = jest.fn()

    test('testing feedback page',()=>{
        let onClickcloseFeedbackModal= jest.fn();
        render(<FeedbackModal closeFeedbackModal={closeFeedbackModal} onClickNextBtnData={onClickNextBtnData}/>)
        const cancelBtn = screen.getByTestId('cancelBtn')
        fireEvent.click(cancelBtn);
        expect(onClickcloseFeedbackModal).toBeDefined();

    })
    test('testing next btn ',()=>{
        const onClickNextBtn = jest.fn()
        render(<FeedbackModal closeFeedbackModal={closeFeedbackModal} onClickNextBtnData={onClickNextBtnData}/>)
        const nextBtn = screen.getByTestId('nextBtn')
        fireEvent.click(nextBtn);
        expect(onClickNextBtn).toBeDefined();

    })
})