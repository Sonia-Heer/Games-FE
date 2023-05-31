import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../apis";

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
          <p>Created: {review.created_at}</p>
          <p>{review.review_body}</p>
          <p>{review.owner}</p>
          <p>Votes: {review.votes}</p>
          
    </div>
  );
};

export default SingleReview;
