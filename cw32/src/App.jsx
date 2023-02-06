import { useState , useContext } from 'react'
import './App.css'
import Login from './component/login'
import SignUp from './component/signup'
import { store } from './component/contexs'

function App() {

  const {state, setState}= useContext(store)

  return (
    <div className="App">
      {
        state==="login" ? <Login /> : <SignUp />  
      }        
    </div>
  )
}

export default App
