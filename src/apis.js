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
      console.log(response.data.review)
      return response.data.review;
    })
}

