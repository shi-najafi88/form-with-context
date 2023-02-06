import React, { createContext , useState } from "react";

export const store = createContext({
    state:"",
    setState:()=>{},
    info:{},
    setInfo:()=>{},
    cityProvince:[],
    setCityProvince:()=>{},
    icon_status:false,
    setIcon_status:()=>{}
});

const ContextProvider = ({children})=> {
   
    const initial =  {name:'',family:'',email:"",pass:'',province:'',city:'',ejocation:'',provinceBthday:'', cityBthday:''}
    const [state, setState] = useState("login")
    const [info, setInfo] = useState(initial)
    const [cityProvince , setCityProvince] = useState([])
    const [icon_status , setIcon_status] = useState(false)


    return(
        <store.Provider value={{
            state,setState,info,setInfo,cityProvince,setCityProvince,icon_status , setIcon_status
        }}>{children}</store.Provider>
    )
}

export default ContextProvider