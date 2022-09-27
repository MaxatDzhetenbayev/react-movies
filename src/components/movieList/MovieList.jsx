import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './MovieList.scss'
import MovieCard from '../movieCard/MovieCard'
import { loadMovies, selectAllMovies } from '../../features/movies/movies-slice'

const MovieList = () => {

   const dispatch = useDispatch()
   const movies = useSelector(selectAllMovies)

   useEffect(() => {
      dispatch(loadMovies())
   }, [])

   return (
      <div className='home__films'>
         {movies.map((movie => {
            const movieInfo = {
               title: movie.title,
               year: movie.year,
               rating: movie.rating,
               genres: movie.genres,
               description: movie.summary,
               image: movie.large_cover_image
            }

            return <MovieCard key={movie.id} {...movieInfo} />
         }))}


      </div>
   )
}

export default MovieList