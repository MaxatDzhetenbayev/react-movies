import React from 'react'

import './VisibleContent.scss'

import Loader from '../../components/loader/Loader'

const VisibleContent = ({ status, error, children }) => {
   return (
      <>
         {status === 'loading' && (
            <div className='movie__message'>
               <Loader />
            </div>
         )}
         {status === 'reject' && (
            <div className='movie__message'>
               {error}
            </div>
         )}
         {status === 'received' && (
            children
         )}
      </>
   )
}

export default VisibleContent