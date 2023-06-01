import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../apis";
import ReviewComments from "./ReviewComments";
import formatDate from "../Functions/FormatDate";
import IncVotes from "./IncVotes";

const SingleReview = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviewById(review_id)
      .then((data) => {
        setReview(data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [review_id]);

  if(isLoading){
    return <p>Loading Review...</p>
}

  return (
    <div>
          <h3>{review.title}</h3>
          <img src={review.review_img_url} alt={review.title} />
          <p>{review.category}</p>
          <p>Designer: {review.designer}</p>
          <p>Created: {formatDate(review.created_at)}</p>
          <p>{review.review_body}</p>
          <p>{review.owner}</p>
          <IncVotes review={review} setReview={setReview} />
         <ReviewComments review_id={review_id} />
         
    </div>
  );
};

export default SingleReview;
