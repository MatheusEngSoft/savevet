import React from 'react'
import { FiCreditCard } from "react-icons/fi";

function PagmentForm() {
  return (
    <div className='pagment-form'>
      <FiCreditCard  size={100} color='#5C2574' className='icon'/>
      <h1>Forma de Pagamento</h1>
      <label htmlFor=""><input type="button" value="PAGSEGURO" /></label>
      <label htmlFor=""><input type="button" value="PIX" /></label>
      <label htmlFor=""><input type="button" value="CARTÃO DE CRÉDITO" /></label>
    </div>
  )
}

export default PagmentForm