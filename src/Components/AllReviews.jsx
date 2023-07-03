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
        return <p className="Reviews">Loading Reviews...</p>
    }
  
    return (
    <div>
        <div className="container">
            <img className="image" src="https://t3.ftcdn.net/jpg/05/71/99/86/360_F_571998686_7q0qDN2lvCn5wv90SHEepoffd0Pq8NRY.jpg" alt="Image" />
        </div>
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