import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../apis";
import ReviewComments from "./ReviewComments";
import formatDate from "../Functions/FormatDate";
import IncVotes from "./IncVotes";
import { Image } from '@chakra-ui/react';
import '../CSS/SingleReview.css';

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
    return <p className="Loading-page">Loading Review...</p>
}

  return (
    <div className="single-review-container">
      <h3 className="sr-title">{review.title}</h3>
      <p className="sr-owner">{review.owner}</p>
        <Image 
            boxSize='200px' 
            objectFit='cover' 
            src={review.review_img_url} 
            alt={review.title} 
            fallbackSrc='https://via.placeholder.com/150'
        />
          {/* <img className="img" src={review.review_img_url} alt={review.title} /> */}
          <main className="single-review-content">
              
              <p>{review.category}</p>
              <p>Designer: {review.designer}</p>
              <p>Created: {formatDate(review.created_at)}</p>
              <p>{review.review_body}</p>
              
            <IncVotes review={review} setReview={setReview} />
            <ReviewComments review_id={review_id} />
          </main>
    </div>
  );
};

export default SingleReview;
