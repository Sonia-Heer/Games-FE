import React, { useContext, useEffect, useState } from "react";
import { getReviews } from "../apis"
import Review from "./Review";
import '../CSS/AllReview.css';
import { Wrap, WrapItem } from '@chakra-ui/react'

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
        return <p className="review-box">Loading Reviews...</p>
    }
  
    return (
    <div>
    <div className="background-image" />
    <div className="review-box"></div>
      <h2 className="Reviews">Reviews</h2>
      <Wrap className="all-reviews" spacing='30px' justify='center'>
            {reviews.map((review, index) => {
                return (
                <Review 
                    key={index} 
                    review={review}
                />
            )
            })}
      </Wrap>
      
    </div>
    )
}

export default AllReviews;