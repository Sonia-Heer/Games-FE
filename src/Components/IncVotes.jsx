import React, { useState } from "react";
import { patchReviewVotes } from "../apis";
import '../CSS/SingleReview.css';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

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
        <div className="author-and-votes-container">
          <div className="votes-container">
          <button 
              aria-label="increment votes for this review" onClick={handleIncrement}
              className="vote-button vote-up"
          >
            <ThumbUpOffAltIcon className="thumbs" />
          </button>
          <button 
              aria-label="decrement votes for this review" onClick={handleDecrement}
              className="vote-button"
          >
            <ThumbDownOffAltIcon className="thumbs" />
          </button>
            <div className="vote-number-container">
              <h3 aria-label="Vote score" className="votes">
                {review.votes}
              </h3>
            </div>
          </div>
            <p>{error}</p>
        </div>   
    )
}

export default IncVotes;