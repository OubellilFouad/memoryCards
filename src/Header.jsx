import React from 'react'
import logo from './images/logo.png'

const Header = ({score}) => {
  return (
    <nav className='grid grid-cols-2 sm:grid-cols-3 px-28 py-3 items-center text-white bg-card flex-[10%]'>
        <img src={logo} className='w-[120px]' alt="" />
        <h1 className='text-xl font-semibold place-content-center hidden sm:flex'>MEMORY GAME</h1>
        <p className='flex place-content-end text-lg'>Score: {score}</p>
    </nav>
  )
}

export default Header