import React from 'react'
import { FiPenTool } from "react-icons/fi";

function PagmentResume() {
  return (
    <div className='pagment-resume'>
      <FiPenTool size={100} color='#5C2574' className='icon'/>
      <h1>Resumo do Pagamento</h1>
      <label htmlFor=""><p>Produto</p><p>Valor</p></label>
      <label htmlFor=""><p>Produto</p><p>Valor</p></label>
      <label htmlFor=""><p>Produto</p><p>Valor</p></label><br/><br/>
      <label htmlFor=""><p>Total</p><p>Valor</p></label>
      <button>Finalizar Compra</button>
    </div>
  )
}

export default PagmentResume