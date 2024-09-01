import React from 'react'
import { BsBank } from "react-icons/bs";

function BillingAddress() {
  return (
    <div className='billing-address'>
      <BsBank size={100} color='#5C2574' className='icon'/>
      <h1>Endereço de cobrança</h1>
      <label htmlFor=""><input type="text" name="name" id="name" placeholder='Nome'/></label>
      <label htmlFor=""><input type="text" name="name" id="name" placeholder='Nome'/></label>
      <label htmlFor=""><input type="text" name="name" id="name" placeholder='Nome'/></label>
      <label htmlFor=""><input type="text" name="name" id="name" placeholder='Nome'/></label>
    </div>
  )
}

export default BillingAddress