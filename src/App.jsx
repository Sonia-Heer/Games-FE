import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import AllReviews from './Components/AllReviews';

function App(){

  return (
    <div>
      <Header/>
      <Nav/>
      <Routes>
        <Route path='/reviews' element={<AllReviews/>}/>
      </Routes>
      
    </div>

  )
}

export default App;