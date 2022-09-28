import React, { useEffect } from 'react'

import MovieList from '../../components/movieList/MovieList'
import Filter from '../../features/controls/filter/Filter'


import { useDispatch } from 'react-redux'
import { loadMovies, selectMoviesInfo, selectVisibleMovies } from '../../features/movies/movies-slice'

const Home = () => {

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(loadMovies())
   }, [])

   return (

      <div className='home'>
         <div className='container'>
            <Filter />
            <MovieList />

            <div>
               {[1, 2, 3, 4, 5].map(item => (
                  <div key={item}>
                     {item}
                  </div>)
               )}
            </div>
         </div>
      </div>
   )
}

export default Home