import axios from "axios";

const gamesApi = axios.create({baseURL: 'https://games-i1rl.onrender.com/api'});

const getReviews = () => {
    return gamesApi.get('/reviews')
      .then((response) => {
        return response.data.reviews;
      })
}

export default getReviews