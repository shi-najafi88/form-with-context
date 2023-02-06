import React, { useContext } from 'react'
import Button from '../button'
import Input from '../input'
import './Login.css'
import data from '../../assets/data.json'
import IconPass from '../iconPassword';
import { store } from '../contexs'


export default function Login() {

  const {state, setState ,info ,setInfo, icon_status , setIcon_status}= useContext(store)

  function switchSignUpBtnHandler() {
    setState('SignUp')
  }

  function checkLoginHandler() {
  data.user.map(item => {
  if(item.email === info.email && item.pass === info.pass){
    console.log('login sucses');
  }else{
    console.log('no sucses');
  }  
  })
  }

  function changeEmail(event){
      setInfo({...info, emeil:event.target.value})
  }
 
  return (
    <div className='container_login'>
        <div className='container_btnLogin'>
          <Button name={"ثبت نام"} bgGreen={false} switchSignUp={switchSignUpBtnHandler} btnMood={'register'}/>
          <Button name={"ورود"} />
        </div>
        <p>خوش آمدید</p>
        <Input type={"email"}placeholder={"پست الکترونیک"} value={info.email} changeInput={changeEmail}/>
        <IconPass icon_status={icon_status} setIcon_status={setIcon_status} type={"password"}placeholder={" کلمه عبور"} info={info} setInfo={setInfo} /> 
        <a href="#">فراموش کردید؟</a>
        <Button name={"ورود"} status={'large'} clickLogin={checkLoginHandler} btnMood={'Main_btnLogin'}/>   
    </div>
  )
}
