import React, { useContext } from 'react'
import Input from '../input'
import { BsEyeSlash , BsEye} from 'react-icons/bs';
import { store } from '../contexs';
import './IconPass.css'

export default function IconPass() {

  const {icon_status , setIcon_status, info , setInfo}= useContext(store)

    function changePass(event){
        setInfo({...info, pass:event.target.value})
    }

    function chengeIcon_true() {
        setIcon_status(true)    
    }
    
    function chengeIcon_false() {
        setIcon_status(false)    
    }
    
  return (
    <div className='container_inputIcon'>
    {icon_status? 
    <>
    <BsEye style={{color:'white'}} onClick={chengeIcon_false}/>
    <Input type={"text"}placeholder={" کلمه عبور"} value={info.pass} changeInput={changePass}/>
    </> 
    :
    <>
    <BsEyeSlash style={{color:'white'}} onClick={chengeIcon_true}/>
    <Input type={"password"}placeholder={" کلمه عبور"} value={info.pass} changeInput={changePass}/>
    </>
    }
  </div>  
  )
}
