import React from 'react'

import MovieList from '../../components/movieList/MovieList'

const Home = () => {
   return (
      <div className='home'>
         <div className='container'>
            Films
            <MovieList />

         </div>
      </div>
   )
}

export default Home