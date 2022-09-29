import React from "react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movie-details/MovieDetails";


function App() {
   return (
      <div className="app">
         <Router>
            <Header />
            <Routes>
               <Route path="/" element={<Home />}>
               </Route>
               <Route path="/movies-detail/:name" element={<MovieDetails />} >
               </Route>
            </Routes>
         </Router>
      </div>
   );
}

export default App;
