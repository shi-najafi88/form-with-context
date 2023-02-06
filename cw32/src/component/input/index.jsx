import React from 'react'
import './Input.css'

export default function Input({type, placeholder, changeInput}) {

  function change(event){
    changeInput(event) 
  }
  
  return (
      <input className='input' type={type} placeholder={placeholder} onChange={change} />

  )
}
