import React from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './MoviesInfo.scss'
import { BsFillArrowLeftCircleFill, BsArrowLeftCircle } from 'react-icons/bs'
import { selectMovieInfo } from './movie-detail-slice'
import ItemTag from '../../components/ItemTag'
import MoviesDownload from './MoviesDownload'


const MoviesInfo = () => {

   const navaigate = useNavigate()
   const theme = useSelector(state => state.theme)
   const { entities: movieInfo } = useSelector(selectMovieInfo)

   const { medium_cover_image, title, year, genres, rating, download_count, like_count, date_uploaded, description_full, language, torrents } = movieInfo

   return (
      <div className='movie-info'>
         <div className='movie-info__arrow' >
            {theme === 'light'
               ? <BsFillArrowLeftCircleFill className='movie-info__arrow-item' onClick={() => navaigate(-1)} />
               : <BsArrowLeftCircle className='movie-info__arrow-item' onClick={() => navaigate(-1)} />
            }
         </div>
         <div className='movie-info__body'>
            <div className='movie-info__top'>
               <img src={medium_cover_image} placeholder='movie art' />
               <div className='movie-info__mainInfo'>
                  <div className='movie-info__item'><span>Name:</span> {title}</div>
                  <div className='movie-info__item'><span>Year:</span> {year}</div>
                  <div className='movie-info__item'><span>Language:</span> {language}</div>
                  <div className='movie-info__item'><span>Rating:</span> {rating}</div>
                  <div className='movie-info__item genres'><span>Genres:</span> {genres.map((genre => (<ItemTag key={genre} title={genre} />)))}</div>
                  <div className='movie-info__item'><span>Like:</span> {like_count}</div>
                  <div className='movie-info__item'><span>Downloaded:</span> {download_count}</div>
                  <div className='movie-info__item'><span>Data uploaded:</span> {date_uploaded}</div>
               </div>
            </div>
            <div className='movie-info__bottom'>
               <div className='movie-info__desc'> <span>Описание:</span> {description_full}</div>

               <div className='movie-info__download'>
                  <h2>Скачать</h2>
                  <div className='movie-info__row'>
                     {torrents.map(torrent => (
                        <MoviesDownload value='скачать' href={torrent.url} quality={torrent.quality} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MoviesInfo