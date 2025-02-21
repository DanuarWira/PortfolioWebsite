import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'

function App() {

  return (
    <>
      <Navbar />
      <div className='flex justify-between my-10 mx-16'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-base text-blue-800 bg-blue-100 rounded-full px-6 py-3 w-fit'>
            Available for work
          </h4>
          <h1 className='text-6xl font-bold'>
            Hello, I`m an
          </h1>
          <h1 className='text-6xl font-bold text-blue-800'>
            UI/UX Designer
          </h1>
          <p>
            I help you build strong and scalable product,
          </p>
          <a href="#" className='bg-blue-800 text-white px-6 py-3 rounded-full w-fit'>Contact me</a>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default App
