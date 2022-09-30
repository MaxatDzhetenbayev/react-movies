import React from 'react'

import './Modal.scss'

const Modal = ({ children, visible, close }) => {


   return (
      <div className='modal' style={{ visibility: visible === true ? 'visible' : 'hidden' }} onClick={close}>
         {children}
      </div>
   )
}

export default Modal