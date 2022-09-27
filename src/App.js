import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
   return (
      <div className="app">
         <Router>
            <Header />
            <Routes>
               <Route path="/" exact element={<Home />}></Route>
            </Routes>
         </Router>
      </div>
   );
}

export default App;
