import React from 'react'

import { BsFillArrowLeftCircleFill, BsArrowLeftCircle } from 'react-icons/bs'

import { useSelector } from 'react-redux'



const MoviesInfo = () => {

   const theme = useSelector(state => state.theme)

   return (
      <div className='movies-info'>
         <div>
            {theme === 'light' ? <BsFillArrowLeftCircleFill /> : <BsArrowLeftCircle />}
         </div>
      </div>
   )
}

export default MoviesInfo