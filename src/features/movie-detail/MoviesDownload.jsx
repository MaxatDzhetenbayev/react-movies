import React from 'react'

import './MoviesDownload.scss'

const MoviesDownload = ({ quality, value, href }) => {
   return (
      <div className='movie-info__download-item'>
         <div>{quality}</div>
         <div>
            <a href={href} className='movie-info__button'>{value}</a>
         </div>
      </div>
   )
}

export default MoviesDownload