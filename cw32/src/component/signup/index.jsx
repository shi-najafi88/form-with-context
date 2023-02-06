import React, { useContext } from 'react'
import Button from '../button'
import Input from '../input'
import './SignUp.css'
import { BsEyeSlash } from 'react-icons/bs';
import data from '../../assets/data.json'
import IconPass from '../iconPassword';
import { store } from '../contexs';

export default function SignUp() {

  const {state , setState, info, setInfo, cityProvince, setCityProvince, icon_status, setIcon_status} = useContext(store)

  function switchLoginBtnHandler(){
    if(info.name !== '' && info.family !== '' && info.email && info.pass){
      alert('your login successfuly')
      setState('login')
      console.log({name:info.name, family:info.family, ejocation: info.ejocation, email:info.email, pass:info.pass, province_bth:info.provinceBthday, city_bth:info.cityBthday})
    }else{
      alert('please complite information')     
    }
  }

  function changeName(event) {
    setInfo({...info, name:event.target.value })
  }

  function changeFamily(event) {
    setInfo({...info, family:event.target.value })
  }

  function changeEjocation(event){
    setInfo({...info, ejocation:event.target.value})
  }

  function changeEmail(event){
    setInfo({...info, email:event.target.value})
  }
  function changePass(event){
    setInfo({...info, pass:event.target.value})
  }

  function changeProvince(event) {
    const provinceDetail = event.target.value
    setCityProvince(data.province[provinceDetail])
    setInfo({...info, provinceBthday:provinceDetail})
  }

  function changeProvinceCity(event) {

    setInfo({...info, cityBthday:event.target.value})

  }


  return (
    <div className='container_signUp'>
        <div className='container_btnLogin'>
          <Button name={"ورود"} bgGreen={false} switchLogin={switchLoginBtnHandler} btnMood={'login'} />
          <Button name={"ثبت نام"}  />        
        </div>
        <p> رایگان ثبت نام کنید</p>
        <div className='wraper_inputName'>
            <Input type={"text"} placeholder={"نام"} value={info.name} changeInput={changeName}/>
            <Input type={"text"} placeholder={"نام خانوادگی"} value={info.family} changeInput={changeFamily}/>
        </div>

        <div className='wraper_input_select'>
            <select className='selected_cityUnivercity'onChange={changeProvince}>
              <option value="">استان محل تولد</option>
              {
                data.city.map(item =>(
                  <option  value={item}>{item}</option>
                ))
              }    
            </select> 

            <select className='selected_cityUnivercity' onChange={changeProvinceCity}>
              <option value="">شهر محل تولد</option>
              {
                cityProvince.map(item =>(
                  <option value={item}>{item}</option>
                ))
              }    
            </select> 
        </div>

        <div className='wraper_input_select'>   
            <Input type={"text"} placeholder={"میزان تحصیلات"} value={info.ejocation} changeInput={changeEjocation} />
            {info.ejocation !== '' && (
              <select className='selected_cityUnivercity'>
                <option value="">شهر محل تحصیل</option>
                {
                  data.city.map(item =>(
                    <option value="">{item}</option>
                  ))
                }    
              </select>    
            )}
        </div>

        <Input type={"email"}placeholder={"ایمیل"} value={info.email} changeInput={changeEmail}/>
        <IconPass icon_status={icon_status} setIcon_status={setIcon_status} type={"password"}placeholder={" کلمه عبور"} info={info} setInfo={setInfo} /> 
        <Button name={"ثبت نام"} status={'large'}/> 
    </div>
  )
}
