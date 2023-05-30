import React from "react";

const Review = ({ review }) => {
    const { review_id, title, designer, owner, review_img_url, review_body, category, votes } = review;

    return (
        <div className="review-container" key={review_id}>
            <h3 className="review-title">Title: {title}</h3>
            <img src={review_img_url}/>
            <p>Category: {category}</p>
            <p>Designer: {designer}</p>
            <p>Owner: {owner}</p>
            <p>Votes: {votes}</p>
            <p className="review-body">{review_body}</p>
            
            
        </div>
    )
}

export default Review