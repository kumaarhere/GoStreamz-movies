

import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Moviesingle from './Moviesingle'
import Home from './pages/Home'
import Error from './Error'

const App = () => {
  return (
    <>
      <BrowserRouter>
      
       <Routes>
          <Route index element={<Home/>} />
          <Route path='/movies/:imdbID' element={<Moviesingle/>}/>
          <Route path='/*' element={<Error/>} />
       </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App

