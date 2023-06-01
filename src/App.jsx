import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import AllReviews from './Components/AllReviews';
import SingleReview from './Components/SingleReview';

function App(){
  return (
    <div>
      <Header/>
      <Nav/>
        <Routes>
          <Route path='/reviews' element={<AllReviews/>}/>
          <Route path='/reviews/:review_id' element={<SingleReview/>}/>
        </Routes>
    </div>

  )
}

export default App;