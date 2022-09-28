import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './MovieList.scss'


import MovieCard from '../movieCard/MovieCard'
import { loadMovies, selectMoviesInfo, selectVisibleMovies } from '../../features/movies/movies-slice'

import VisibleContent from '../visibleContent/VisibleContent'


const MovieList = () => {

   const filter = useSelector(state => state.controls.filter)
   const { status, error } = useSelector(selectMoviesInfo)
   const movies = useSelector((state) => selectVisibleMovies(state, filter))



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