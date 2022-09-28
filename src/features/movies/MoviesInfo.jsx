import React from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './MoviesInfo.scss'
import { BsFillArrowLeftCircleFill, BsArrowLeftCircle } from 'react-icons/bs'
import { selectMovieInfo } from '../movie-detail/movie-detail-slice'


const MoviesInfo = () => {

   const navaigate = useNavigate()
   const theme = useSelector(state => state.theme)
   const { entities: movieInfo } = useSelector(selectMovieInfo)
   
   const {title} = movieInfo

   return (
      <div className='movie-info'>
         <div className='movie-info__arrow' >
            {theme === 'light'
               ? <BsFillArrowLeftCircleFill className='movie-info__arrow-item' onClick={() => navaigate(-1)} />
               : <BsArrowLeftCircle className='movie-info__arrow-item' onClick={() => navaigate(-1)} />
            }
         </div>
         <div className='movie-info__body'>
            <div>{title}</div>
         </div>
      </div>
   )
}

export default MoviesInfo