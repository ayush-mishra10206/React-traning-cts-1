
import './index.css';
import { GrFormClose } from "react-icons/gr";
import React, { useEffect, useState } from "react";
import RatingModal from '../RatingModal';

export default function FeedbackModal({ closeFeedbackModal, onClickNextBtnData, prodDesc }) {
    const [feedbackData, setFeedBackData] = useState({
        name: '',
        email: '',
        phone: '',
        reviewText: ''
    })
    const onChangeInputData = (event) => {
        setFeedBackData({ ...feedbackData, [event.target.name]: event.target.value })
    }
    const onClickNextBtn = () => {
        if (feedbackData.name === '' || feedbackData.email === '' || feedbackData.phone === '' || feedbackData.reviewText === '') {
            return;
        }
        if (prodDesc.reviews[prodDesc.reviews.findIndex(rev => rev.name === feedbackData.name)]) {
            alert('You have already provided review')

        }
        const data = {
            name: feedbackData.name,
            email: feedbackData.email,
            phone: feedbackData.phone,
            reviewText: feedbackData.reviewText
        }
        onClickNextBtnData(data)
    }

    return <div data-testid="popFeedbackModal" className='feedBackOuterDiv'>
        <div className='feedBackTitle'>FeedBack
            <div>
                <GrFormClose className="closeIcon" onClick={closeFeedbackModal} />
            </div>
        </div>
        <div style={{ border: '1px solid black', margin: '5%', paddingBottom: '2%' }}>
            <div className='inputOuterDiv'>
                <div className='topInputField'>
                    <input value={feedbackData.name} name="name" placeholder='Name' className="inputField" onChange={onChangeInputData} />
                    <input value={feedbackData.email} name="email" placeholder='Email' className="inputField" onChange={onChangeInputData} />
                </div>
                <input value={feedbackData.phone} name="phone" placeholder='Phone' type='number' className="inputField" style={{ width: '100%', marginTop: '5%' }} onChange={onChangeInputData} />
                <textarea value={feedbackData.reviewText} name="reviewText" placeholder='please right your review' style={{ width: '97%', marginTop: '5%', padding: '2%' }} onChange={onChangeInputData}></textarea>
            </div>
            <div className='bottomBtn'>
                <button data-testid="nextBtn" className='Btn' onClick={onClickNextBtn}>Next</button>
                <button data-testid="cancelBtn" className='Btn' onClick={closeFeedbackModal}>Cancel</button>
            </div>
        </div>
    </div>
}