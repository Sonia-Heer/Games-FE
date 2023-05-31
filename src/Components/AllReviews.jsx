import React, { useContext, useEffect, useState } from "react";
import { getReviews } from "../apis"
import Review from "./Review";
import ReviewGrid from "./ReviewGrid";

const AllReviews = () => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getReviews()
        .then((res) => {
            setReviews(res)
            setIsLoading(false)
        })            
        .catch((err) => {
            console.error(err);
        });
    }, [])

    if(isLoading){
        return <p>Loading Reviews...</p>
    }
  
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