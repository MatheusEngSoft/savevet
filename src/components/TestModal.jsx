import React, { useState } from 'react'
import './testModal.css'
import PagmentResume from './PagmentResume'

function TestModal() {

  const [openModal, setOpenModal] = useState(false)

  const closeModal = () => setOpenModal(false)
  return (
    <div className='test-modal'>
      <div>
        TestModal
      </div>
      <div>
        <button onClick={() => setOpenModal(true)}>Abrir Modal</button>
      </div>
      <PagmentResume isOpen={openModal} onClose={closeModal}/>
    </div>
  )
}

export default TestModal