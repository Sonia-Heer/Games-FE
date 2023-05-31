import React from "react";
import { Link } from "react-router-dom";

const Review = ({ review }) => {
    const { review_id, title, designer, owner, review_img_url, review_body, category, votes } = review;

    return (
        <div className="review-container" key={review_id}>
            <h3 className="review-title">{title}</h3>
            <img src={review_img_url}/>
            <p className="review-category">{category}</p>
            <p className="review-body">{review_body}</p>
           <Link to={`/reviews/${review_id}`}>
            <button>Read More</button>
           </Link>
        </div>
    )
}

export default Review

