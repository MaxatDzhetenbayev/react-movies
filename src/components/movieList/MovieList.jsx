import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './MovieList.scss'



import MovieCard from '../movieCard/MovieCard'

import { loadMovies, selectAllMovies, selectMoviesInfo, selectVisibleMovies } from '../../features/movies/movies-slice'
import Loader from '../loader/Loader'


const MovieList = () => {

   const filter = useSelector(state => state.controls.filter)
   const dispatch = useDispatch()
   const { status, error, qty } = useSelector(selectMoviesInfo)
   const movies = useSelector((state) => selectVisibleMovies(state, filter))

   useEffect(() => {
      dispatch(loadMovies())
   }, [])

   return (

      <>
         {status === 'loading' && (
            <div className='movie__message'>
               <Loader />
            </div>
         )}

         {status == 'rejected' && (
            <div className='movie__message'>{error}</div>
         )}
         <div className='movie__films'>



            {
               status === 'received' && (movies.map((movie => {
                  const movieInfo = {
                     title: movie.title,
                     year: movie.year,
                     genres: movie.genres,
                     description: movie.summary,
                     image: movie.large_cover_image
                  }

                  return <MovieCard key={movie.id} {...movieInfo} />
               })))
            }


         </div >
      </>
   )
}

export default MovieList