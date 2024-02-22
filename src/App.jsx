import React from 'react'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
         <Route path='/home' element={<Home />}/>
        
        </Routes>
    </BrowserRouter>
  )
}

export default App

