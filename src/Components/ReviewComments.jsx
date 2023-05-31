import React from "react";
import { getReviewIdComments } from "../apis";
import { useState, useEffect } from "react";
import formatDate from "../Functions/FormatDate";

const ReviewComments = ({ reviewId }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => { 
      getReviewIdComments(reviewId)
        .then((data) => {
          setComments(data);
          setIsLoading(false)
        })
        .catch((error) => {
          console.error(error);
        });
    }, [reviewId]);

    if(isLoading){
      return <p>Loading comments...</p>
    }
    
    return (
        <div>
            <h3>Comments</h3>
                {comments.length > 0 ? (
                    comments.map((comment, index) => {
                    return <li className="Comment" key={index}>
                        <p>{comment.author}</p> 
                        <p>{comment.body}</p> 
                        <p>Votes: {comment.votes}</p> 
                        <p>{formatDate(comment.created_at)}</p> 
                        </li>
                    })
                ) : (<p>No comments...</p>)}            
        </div>
    )

}

export default ReviewComments;