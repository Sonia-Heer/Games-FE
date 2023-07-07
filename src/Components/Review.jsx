import React from "react";
import { Link } from "react-router-dom";


const Review = ({ review }) => {

    const { review_id, title, owner, review_img_url, comment_count, category, votes } = review;

    return (

            <Link className="review-container" key={review_id} to={`/reviews/${review_id}`}>
                <h3 className="review-title">{title}</h3>
                <section className="review-text">
                    <div className="left">
                        <p>Category: {category}</p>
                        <p>By: {owner}</p>
                    </div>
                    <div className="right">
                        <p>Votes: {votes}</p>
                        <p>Comments: {comment_count}</p>
                    </div>
                </section>
                <img className="img" src={review_img_url}/>
           </Link>
       )
}

export default Review

