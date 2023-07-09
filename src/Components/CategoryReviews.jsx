import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getReviews } from "../apis";
import Review from "./Review";
import '../CSS/AllReview.css';
import { Wrap } from '@chakra-ui/react';

const CategoryReviews = ({category}) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews()
      .then((res) => {
        setReviews(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredReviews = reviews.filter(review => review.category === category);


  if (isLoading) {
    return <p>Loading Reviews...</p>;
  }

  return (
    <div>
      <h2 className="category-title">{category}</h2>
      <Wrap spacing='30px' justify='center'>
        {filteredReviews.map((review, index) => {

            return (
                <Review key={index} review={review} />
            ) 
        } 
    )}
      </Wrap>
    </div>
  );
};

export default CategoryReviews;
