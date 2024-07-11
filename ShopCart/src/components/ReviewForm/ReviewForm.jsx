
import { useState } from 'react';
import './ReviewForm.css';
import { useAddReviewMutation } from '../../store/features/apiSlice';
import { useParams } from 'react-router-dom';
const ReviewForm = () => {
    const {prodId} = useParams()
    let initialState ={

        user: "",
        rating: "",
        comment: "",
        prodId
        
    }
    
    const [formData,setFormData] = useState(initialState)
    const [addReview] = useAddReviewMutation();
    const onChangeInput = (e)=>{
        const {name,value} =  e.target
        setFormData({
            ...formData,
            [name]: value
        })

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        await addReview(formData); 
        setFormData(initialState);
    };
    return (
        <div className="review_form">
            <form onSubmit={handleSubmit}>
                <div className="form_group">
                    <input
                        type="text"
                        placeholder='Enter your Name'
                        id="customerName"
                        name='user'
                        value={formData.user}
                        onChange={onChangeInput}
                        required
                    />
                </div>
                <div className="form_group">
                    <textarea
                    placeholder='Add your Review here'
                        id="review"
                        name='comment'
                        value={formData.comment}
                        onChange={onChangeInput}
                        required
                    ></textarea>
                </div>
                <div className="form_group">
                    <select
                        onChange={onChangeInput}
                        value={formData.rating}
                        id="rating"
                        name='rating'
                        required
                    >
                        <option value="">Select rating</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                    </select>
                </div>
                <div className="formBtn">
                <button type="submit" className="submit_button">Submit Review</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;
