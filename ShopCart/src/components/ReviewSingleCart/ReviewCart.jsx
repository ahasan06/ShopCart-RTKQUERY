/* eslint-disable react/prop-types */
import './ReviewCart.css';

const ReviewCart = ({ review }) => {
    const generateStars =(n)=>{
        let array = [];
        for (let i = 0; i < n; i++) {
            array.push("✯")
        }
        return array.join('')
    }
    return (
        <div className="reviewCard">
            <div className="reviewerName">
                <p><span>Customer Name: </span>{review.user}</p>
             
            </div>
            <div className="reviewCommentBody">
                <div className="reviewerComment">
                    <p>{review.comment}</p>
                </div>
                <div className="reviewerRating">
                    <p><span>Rating:</span> {generateStars(review.rating)}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;
