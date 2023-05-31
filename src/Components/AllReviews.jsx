import React, { useContext, useEffect, useState } from "react";
import { getReviews } from "../apis"
import Review from "./Review";
import ReviewGrid from "./ReviewGrid";
import { ReviewsContext } from "../Context/ReviewsContext";

const AllReviews = () => {
    const {reviews, setReviews} = useContext(ReviewsContext)

    useEffect(() => {
        getReviews()
        .then((res) => {
            setReviews(res)
        })            
        .catch((err) => {
            console.error(err);
        });
    }, [])

    return (
    <div>
      <h2>Reviews</h2>
    <ReviewGrid>
    {reviews.map((review, index) => {
        return (
            <Review 
                key={index} 
                review={review}
            />
        )
      })}
    </ReviewGrid>
    </div>
    )
}

export default AllReviews;