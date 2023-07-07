import axios from "axios";

const gamesApi = axios.create({baseURL: 'https://games-i1rl.onrender.com/api'});

export function getReviews(){
    return gamesApi.get('/reviews')
      .then((response) => {
        return response.data.reviews;
      })
}

export function getReviewById(review_id){
  return gamesApi.get(`/reviews/${review_id}`)
    .then((response) => {
      return response.data.review;
    })
}

export function getReviewIdComments(review_id){
  return gamesApi.get(`/reviews/${review_id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
}

export function patchReviewVotes(review_id, inc_votes){
  const patchBody = {
    inc_votes: inc_votes,
  };
  return gamesApi.patch(`/reviews/${review_id}`, patchBody)
    .then((response) => {
      return response.data
    })
}


export function getCategories(){
  return gamesApi.get('/categories')
    .then((response) => {
      return response.data;
    })
}

export function postComment(review_id, author, body){
  const commentData = {
    author: author,
    body: body
  };

  return gamesApi.post(`/reviews/${review_id}/comments`, commentData)
    .then((response) => {
      return response.data.newComment
    })
}


