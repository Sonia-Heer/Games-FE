import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../apis";
import ReviewComments from "./ReviewComments";
import formatDate from "../Functions/FormatDate";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    getReviewById(review_id)
      .then((data) => {
        setReview(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [review_id]);

  
  return (
    <div>
      {review ? (
        <>
          <h3>{review.title}</h3>
          <img src={review.review_img_url} alt={"Image of a game"} />
          <p>{review.category}</p>
          <p>Designer: {review.designer}</p>
          <p>Created: {formatDate(review.created_at)}</p>
          <p>{review.review_body}</p>
          <p>{review.owner}</p>
          <p>Votes: {review.votes}</p>
          
        </>
      ) : (
        <p>Loading review...</p>
      )}
         <ReviewComments reviewId={review_id} />
    </div>
  );
};

export default SingleReview;
