import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import AllReviews from './Components/AllReviews';
import SingleReview from './Components/SingleReview';
import { ReviewsContext } from "./Context/ReviewsContext";

function App(){
  const [reviews, setReviews] = useState([])
  return (
    <div>
      <Header/>
      <Nav/>
      <ReviewsContext.Provider value={{ reviews, setReviews }}>
        <Routes>
          <Route path='/reviews' element={<AllReviews/>}/>
          <Route path='/reviews/:review_id' element={<SingleReview/>}/>
        </Routes>
      </ReviewsContext.Provider>
    </div>

  )
}

export default App;