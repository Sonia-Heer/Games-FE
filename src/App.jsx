import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AllReviews from './Components/AllReviews';
import SingleReview from './Components/SingleReview';
import Categories from './Components/Categories';
import CategoryReviews from "./Components/CategoryReviews";
import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'your-desired-background-color',
      },
    },
  },
});


function App(){
  return (
    <ChakraProvider theme={theme}>
      <Header/>
        <Routes>
          <Route path='/reviews' element={<AllReviews/>}/>
          <Route path='/reviews/:review_id' element={<SingleReview/>}/>
          <Route path='/' element={<Categories />}/>
          <Route path='/categories' element={<CategoryReviews />}/>
        </Routes>
    </ChakraProvider>
  )
}

export default App;