import React from 'react'
import './MovieList.scss'
import MovieCard from '../movieCard/MovieCard'

const MovieList = () => {
   return (
      <div className='home__films'>
         {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <MovieCard key={item} />
         ))}


      </div>
   )
}

export default MovieList