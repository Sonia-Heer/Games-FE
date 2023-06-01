import React from "react";
import { getReviewIdComments } from "../apis";
import { useState, useEffect } from "react";
import formatDate from "../Functions/FormatDate";
import AddComment from "./AddComment";

const ReviewComments = ({ review_id }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => { 
      getReviewIdComments(review_id)
        .then((data) => {
          setComments(data);
          setIsLoading(false)
        })
        .catch((error) => {
          console.error(error);
        });
    }, [review_id]);

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
            <AddComment review_id={review_id} setComments={setComments} />         
        </div>
    )

}

export default ReviewComments;