import React, { useState } from 'react'

function SelectCard() {
  const [selectedCard, setSelectedCard] = useState("");

  return (
    <div className='select-card'>
      <select 
        name="card-credit" 
        id="card-credit"
        className='credit-card' 
        value={selectedCard} 
        onChange={(e) => setSelectedCard(e.target.value)}
      >
        <option value="" disabled hidden>Cartão de Crédito</option>
        <option value="cartão 1">Cartão 1</option>
        <option value="cartão 2">Cartão 2</option>
      </select>
      <button>Adicionar Cartão</button>
    </div>
  )
}

export default SelectCard