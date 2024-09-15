import React from 'react'

function AddCard() {
  return (
    <div className='add-card'>
      <h1>Adicionar Novo Cartão</h1>
      <label htmlFor=""><input type="text" placeholder='Número do cartão'/></label>
      <label htmlFor=""><input type="text" placeholder='Nome impresso no cartão'/></label>
      <div className='add-card2'>
        <label htmlFor=""><input type="text" placeholder='validade'/></label>
        <label htmlFor=""><input type="text" placeholder='CVV'/></label>
      </div>
      <button>Adicionar</button>
    </div>
  )
}

export default AddCard