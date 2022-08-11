

import React, { useState } from "react";
import {
    BsEmojiFrown,
    BsEmojiExpressionless,
    BsEmojiNeutral,
    BsEmojiSmile,
    BsEmojiLaughing,
} from "react-icons/bs";

import './index.css'

export default function RatingModal({ onClickReviewSubmited }) {
    const [emojiSelected, setEmojiSelected] = useState('')

    const emojiPressed = (data) => {
        setEmojiSelected(data)
    }

    const onClickSubmit = () => {
        onClickReviewSubmited(emojiSelected)
    }

    return (
        <div className="ratingOuterDiv">
            <div className="ratingHeader">Ratings</div>
            <div className="emojiDiv">
                <button style={{ border: emojiSelected === 'frown' ? '1px solid black' : 0 }} type="button" className="emojiIcon" data-testid="frownIcon" onClick={() => emojiPressed('frown')}>
                    {<BsEmojiFrown className="emoji" />}
                </button>
                <button style={{ border: emojiSelected === 'less' ? '1px solid black' : 0 }} type="button" className="emojiIcon" data-testid="lessIcon" onClick={() => emojiPressed('less')}>
                    {<BsEmojiExpressionless className="emoji" />}
                </button>
                <button style={{ border: emojiSelected === 'neutral' ? '1px solid black' : 0 }} type="button" className="emojiIcon" data-testid="neutralIcon" onClick={() => emojiPressed('neutral')} >
                    {<BsEmojiNeutral className="emoji" />}
                </button>
                <button style={{ border: emojiSelected === 'smile' ? '1px solid black' : 0 }} type="button" className="emojiIcon" data-testid="smileIcon" onClick={() => emojiPressed('smile')} >
                    {<BsEmojiSmile className="emoji" />}
                </button>
                <button style={{ border: emojiSelected === 'laughing' ? '1px solid black' : 0 }} type="button" className="emojiIcon" data-testid="laughIcon" onClick={() => emojiPressed('laughing')} >
                    {<BsEmojiLaughing className="emoji" />}
                </button>
            </div>
            <button type="submit" className="feedbackSubmitButton" onClick={onClickSubmit}>
                Submit
            </button>
            <div data-testid="emojiData" style={{ color: 'white' }}>{emojiSelected}</div>
        </div>
    );
}


