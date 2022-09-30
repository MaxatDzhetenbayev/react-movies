import { useEffect, useState } from 'react'
import Modal from '../../../components/modal/Modal'
import MovieQuery from './movieQuery/MovieQuery'
import MoviesSearchModal from './moviesSearchModal/MoviesSearchModal'

const Search = () => {

   const [modalVisible, setModalVisible] = useState(false)


   const handleVisible = () => {
      if (modalVisible === true) {
         setModalVisible(false)
         document.body.style = 'overflow-y: visible'
      } else {
         setModalVisible(true)
         document.body.style = 'overflow-y: hidden'
      }
   }


   return (
      <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px 0px', }}>
         <MovieQuery handleVisible={handleVisible} />
         <Modal visible={modalVisible} close={handleVisible}>
            <MoviesSearchModal />
         </Modal>
      </div>
   )
}

export default Search