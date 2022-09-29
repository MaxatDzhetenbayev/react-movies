import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { loadMovies, selectMoviesInfo, setPage } from '../../features/movies/movies-slice'

import MovieList from '../../components/movieList/MovieList'
import Pagination from '../../components/pagination/Pagination'
import Controls from '../../features/controls/Controls'



const Home = () => {

   const dispatch = useDispatch()

   const limit = 20
   const { page, movie_count } = useSelector(selectMoviesInfo)

   const total_count = Math.ceil(movie_count / limit)
   const total_page = []

   const { sort } = useParams()

   for (let i = 0; i < total_count; i++) {
      total_page.push(i + 1)
   }

   useEffect(() => {
      dispatch(loadMovies({ page, sort }))
   }, [page, sort])


   const handleSetPage = (page) => {
      dispatch(setPage(page))
   }


   return (
      <div className='home'>
         <div className='container'>
            <Controls />
            <MovieList />
            <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center'}}>
               <Pagination total_page={total_page} handleSetPage={handleSetPage} page={page} />
            </div>

         </div>
      </div>
   )
}

export default Home