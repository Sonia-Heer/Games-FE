import React, { useState } from "react";
import { patchReviewVotes } from "../apis";


const IncVotes = ({ review, setReview }) => {
    const [error, setError] = useState(null);
    const { review_id } = review;

    const handleIncrement = () => {
        setReview((currentReview) => ({
          ...currentReview, votes: currentReview.votes + 1
        }));

        patchReviewVotes(review_id, 1)
        .catch((err) => {
            setError("Failed to increment the review.");
            setReview((currentReview) => ({
              ...currentReview,
              votes: currentReview.votes - 1,
            }));
          });
      };

      const handleDecrement = () => {
        setReview((currentReview) => ({
          ...currentReview, votes: currentReview.votes - 1
        }));

        patchReviewVotes(review_id, -1)
        .catch((err) => {
            setError("Failed to decrement the review.");
            setReview((currentReview) => ({
              ...currentReview,
              votes: currentReview.votes + 1,
            }));
          });
      };

    return (
        <div className="vote-button">
            <p className="vote-count">Votes: {review.votes}</p>
            <button onClick={handleIncrement}>
                <span aria-label="increment votes for this review">⬆</span>
            </button>
            <button onClick={handleDecrement}>
                <span aria-label="decrement votes for this review">⬇</span>
            </button>
            <p>{error}</p>
        </div>   
    )
}

export default IncVotes;