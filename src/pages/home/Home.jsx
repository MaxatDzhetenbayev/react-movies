import React from 'react'

import MovieList from '../../components/movieList/MovieList'
import Filter from '../../features/controls/filter/Filter'

const Home = () => {
   return (
      <div className='home'>
         <div className='container'>
            <Filter />
            <MovieList />
         </div>
      </div>
   )
}

export default Home