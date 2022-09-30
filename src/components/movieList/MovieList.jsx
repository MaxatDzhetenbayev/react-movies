import React from 'react'
import { useSelector } from 'react-redux'

import './MovieList.scss'


import MovieCard from '../movieCard/MovieCard'
import {  selectMoviesInfo, selectVisibleMovies } from '../../features/movies/movies-slice'

import VisibleContent from '../visibleContent/VisibleContent'


const MovieList = () => {

   const search = useSelector(state => state.controls.search)
   const { status, error } = useSelector(selectMoviesInfo)
   const movies = useSelector((state) => selectVisibleMovies(state, search))



   return (
      <VisibleContent status={status} error={error}>

         <div className='movie__films'>
            {
               movies.map((movie => {
                  const movieInfo = {
                     title: movie.title,
                     year: movie.year,
                     genres: movie.genres,
                     description: movie.summary,
                     image: movie.large_cover_image,
                     id: movie.id,
                     slug: movie.slug,
                     rating: movie.rating
                  }
                  return <MovieCard key={movie.id} {...movieInfo} />
               }))
            }
         </div>
      </VisibleContent>
   )
}

export default MovieList