import React, { useEffect, useState } from 'react'

import MovieList from '../../components/movieList/MovieList'
import Filter from '../../features/controls/filter/Filter'


import { useDispatch, useSelector } from 'react-redux'
import { loadMovies, selectMoviesInfo, setPage } from '../../features/movies/movies-slice'
import Pagination from '../../components/pagination/Pagination'



const Home = () => {

   const dispatch = useDispatch()

   const limit = 20
   const { page, movie_count } = useSelector(selectMoviesInfo)

   const total_count = Math.ceil(movie_count / limit)
   const total_page = []


   for (let i = 0; i < total_count; i++) {
      total_page.push(i + 1)
   }


   useEffect(() => {
      dispatch(loadMovies(page))
   }, [page])


   const handleSetPage = (page) => {
      dispatch(setPage(page))
   }


   return (
      <div className='home'>
         <div className='container'>
            <Filter />
            <MovieList />
            <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
               <Pagination total_page={total_page} handleSetPage={handleSetPage} page={page} />
            </div>

         </div>
      </div>
   )
}

export default Home