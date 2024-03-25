

import React from 'react'
import logo from './assets/logo.png';

const Error = () => {
  return (
    <div className='d-flex flex-column'>
        <img src={logo} className='w-25 '></img>
        <div className='path'>
        <img src='https://img.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1880.jpg' className='w-75 error'></img>
        </div>
    </div>
  )
}

export default Error
