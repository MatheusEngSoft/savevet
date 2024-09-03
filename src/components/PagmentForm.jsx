import React from 'react'
import { FiCreditCard } from "react-icons/fi";

function PagmentForm({isOpen, onClose}) {

  if (isOpen){
    const handleClickOutside = (e) => {
      if(e.target.className === 'pagment-overlay'){
        onClose()
      }
    }
    return (
    <div className='pagment-overlay' onClick={handleClickOutside}>
      <div className='pagment-form'>
        <FiCreditCard  size={100} color='#5C2574' className='icon'/>
        <h1>Forma de Pagamento</h1>
        <label htmlFor=""><input type="button" value="PAGSEGURO" /></label>
        <label htmlFor=""><input type="button" value="PIX" /></label>
        <label htmlFor=""><input type="button" value="CARTÃO DE CRÉDITO" /></label>
      </div>
    </div>
    )
  }

  return null

}

export default PagmentForm