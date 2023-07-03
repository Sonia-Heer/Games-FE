import React, { useState } from 'react';
import { postComment } from '../apis';
import { Button, ButtonGroup } from '@chakra-ui/react'

const AddComment = ({ review_id, setComments }) => {
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      author,
      body
    };

    setIsSubmitting(true);

    postComment(review_id, author, body)
      .then((newCommentFromApi) => {
        setComments((currentComments) => [newCommentFromApi, ...currentComments]);
        setAuthor('');
        setBody('');
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div>
      <h2>Comment on this review:</h2>
      <form className="AddComment" onSubmit={handleSubmit}>
        <div>
          <input name="author" placeholder="username..." value={author} onChange={handleAuthorChange} required />
        </div>
        <div>
          <textarea
            name="body"
            placeholder="Add a comment..."
            value={body}
            onChange={handleBodyChange}
            required
          ></textarea>
        </div>
        <Button
            loadingText='Submitting...'
            colorScheme='cyan'
            variant='solid'
            type="submit" 
            disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Add Comment'}
        </Button>
      </form>
    </div>
  );
};

export default AddComment;