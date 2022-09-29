import React from 'react'
import Button from '../buttons/Button'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Pagination.scss'



const Pagination = ({ total_page, handleSetPage }) => {
   const settings = {
      centerPadding: 20,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      infinite: false,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 10,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 6,
               slidesToScroll: 6,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
            }
         },

      ]
   };

   return (
      <div className='pagination'>
         <Slider {...settings} className='pag'>
            {total_page.map(item => (
               <Button key={item} onClick={() => handleSetPage(item)} >
                  {item}
               </Button>
            ))}
         </Slider>
      </div>
   )
}

export default Pagination


function SampleNextArrow(props) {
   const { style, onClick } = props;
   return (
      <div
         className='arrow arrow-next'
         style={{ ...style, }}
         onClick={onClick}
      >
         <span>
            <AiOutlineArrowRight />
         </span>
      </div>
   );
}

function SamplePrevArrow(props) {
   const { style, onClick } = props;
   return (
      <div
         className='arrow  arrow-prev'
         style={{ ...style, }}
         onClick={onClick}
      >
         <span>
            <AiOutlineArrowLeft />
         </span>
      </div>
   );
}