import React from 'react'
import './Btn.css'

export default function Button ({name, status="medium" , bgGreen=true, btnMood, switchSignUp, switchLogin, clickLogin}) {

  function clickHandler(state) {
    if(state === 'register'){
      switchSignUp()
    }else if(state === 'login'){
      switchLogin()
    }else if(state === 'Main_btnLogin'){
      clickLogin()
    } 
  }

  return (
    
    <button className={`btn ${status==='medium'? "btn_medium" : "btn_large"} ${bgGreen ? "bg-green" : '' }`}
    onClick={()=>clickHandler(btnMood)} >{name}</button>        
    
  )
}
