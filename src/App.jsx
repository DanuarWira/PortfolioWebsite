import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import { ServicesList } from './data/ServicesList.js'
import { UiProjectList } from './data/UiProjectList.js'
import HeroImage from './assets/images/heroimages.svg'
import { FaCircleChevronRight } from "react-icons/fa6";

function App() {

  return (
    <div className='bg-neutral-50'>
      <Navbar />
      <div className='max-w-screen-2xl mx-auto flex flex-col-reverse justify-between md:flex-row items-center md:px-20 my-10 gap-8'>
        <div className='flex flex-col gap-5'>
          <h5 className='text-base text-blue-800 bg-blue-100 rounded-full px-6 py-3 w-fit'>
            Available for work
          </h5>
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
        <img src={HeroImage} alt="" />
      </div>
      <div className='max-w-screen-2xl mx-auto flex flex-col-reverse justify-between md:flex-row items-center px-6 md:px-20 my-10 gap-8'>
        <div className='w-full md:w-1/2'>
          {ServicesList.map((item) => (
            // const Images = item.image;
            <div key={item.id} className="w-fit bg-white p-6 rounded-3xl mt-4 drop-shadow-lg flex">
              <img src={item.image} alt="" className=''/>
              <div className='pl-6 bg-white rounded-md flex flex-col gap-2 w-fit'>
                <h4 className='text-2xl font-semibold text-neutral-900'>{item.title}</h4>
                <p className='text-sm text-neutral-600'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-5 w-full md:w-1/2'>
          <h2 className='text-4xl font-bold text-neutral-900'>
            My Awesome <span className='text-blue-800'>Services</span>
          </h2>
          <p className='text-base text-neutral-700'>Lorem ipsum</p>
        </div>
      </div>
      <div className='max-w-screen-2xl mx-auto flex flex-col justify-between items-center my-10 gap-6'>
        <h2 className='text-center text-4xl font-bold text-neutral-900'>
          Portfolio <span className='text-blue-800'>Showcase</span>
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        {UiProjectList.map((item) => (
          <div key={item.id} className='w-full flex flex-col gap-4'>
            <img src="" alt="Portfolio showcase" className='fill-neutral-800'/>
            <div className='flex justify-between items-end'>
              <div className='flex flex-col gap-2'>
                <h6 className='text-xl font-bold text-neutral-900'>
                  {item.title}
                </h6>
                <p className='text-base text-neutral-700'>
                  {item.subtitle}
                </p>
              </div>
              <FaCircleChevronRight size={24} className='fill-blue-800'/>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className='flex flex-col bg-blue-800 px-16 py-12 text-neutral-50 gap-3'>
        <h4 className='text-3xl font-bold'>Got a project?</h4>
        <h4 className='text-xl'>Let`s start</h4>
        <a href="#" className='bg-neutral-50 text-blue-800 px-6 py-2 rounded-full w-fit'>Contact me</a>
      </div>
      <Footer/>
    </div>
  )
}

export default App
