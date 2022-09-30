import React from 'react'

import { useSelector } from 'react-redux'

import MovieQuery from '../movieQuery/MovieQuery'
import MoviesModalInfo from '../moviesModalInfo/MoviesModalInfo'

import './MoviesSearchModal.scss'

const MoviesSearchModal = () => {


   const queryMovies = useSelector(state => state.controls.queryMovies)

   return (
      <div className='MoviesSearchModal' >
         <div className='modalInfo'  >
            <div style={{ marginBottom: '2rem' }}>
               <MovieQuery />
            </div>
            <div>
               {queryMovies &&
                  queryMovies.map((movies) => {
                     return (
                        <MoviesModalInfo key={movies.id} moviesInfo={movies} />
                     )
                  })
               }
            </div>
         </div>
      </div>

   )
}

export default MoviesSearchModal