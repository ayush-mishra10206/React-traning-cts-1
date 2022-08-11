import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { updateFeedback } from "../../services";
import FeedbackModal from "../feedbackmodal";
import RatingModal from "../RatingModal";
import './index.css';

export default function Reviews({ prodDesc }) {
    const [popFeedbackModal, setpopFeedbackModal] = useState(false);
    const [popRatingModal, setpopRatingModal] = useState(false);
    const [reviewData, setReviewData] = useState({})

    const openReviewPop = () => {
        setpopFeedbackModal(true);
    };
    const onClickcloseFeedbackModal = () => {
        setpopFeedbackModal(false);
    };

    const onClickNextBtnData = (data) => {
        setReviewData(data)
        setpopRatingModal(true)
        setpopFeedbackModal(false)
    }

    const onClickReviewSubmited = (data) => {
        setReviewData({ ...reviewData, rating: data })
        setpopRatingModal(false)
        updateFeedback({ ...prodDesc, reviews: [...prodDesc.reviews, { ...reviewData, rating: data }] }, prodDesc.id)

    }


    return <div>
        <div className="headerTextDiv"><span className="headerText">Leave a Review </span>  <span className="pen-format"><FaPencilAlt className="openReview" data-testid="pencilIcon" onClick={() => openReviewPop()} /></span></div>
        {prodDesc && prodDesc.reviews && prodDesc.reviews.map((item) => {
            return (<div key={item.phone} className="rev-format">
                <div className="reviewDetails">
                    <div style={{ fontWeight: "bold" }}>{item?.name}</div>
                    <p>{item?.reviewText}</p>
                </div>
            </div>);
        })}
        {popFeedbackModal && <FeedbackModal prodDesc={prodDesc} closeFeedbackModal={onClickcloseFeedbackModal} show={popFeedbackModal} onClickNextBtnData={onClickNextBtnData} />}
        {popRatingModal && <RatingModal onClickReviewSubmited={onClickReviewSubmited} />}
    </div>
}