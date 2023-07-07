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
            
            <AddComment review_id={review_id} setComments={setComments} /> 
                {comments.length > 0 ? (
                    comments.map((comment, index) => {
                    return <li className="comment-card" key={index}>
                      
                        <p className="comment-author">{comment.author}</p> 
                        <p className="comment-date-likes">Likes: {comment.votes}</p> 
                        <p className="comment-body">{comment.body}</p> 
                        <p className="comment-date-likes">{formatDate(comment.created_at)}</p>
                        </li>
                    })
                ) : (<p>No comments...</p>)}   
        </div>
    )

}

export default ReviewComments;