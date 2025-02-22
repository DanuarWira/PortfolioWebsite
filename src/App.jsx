import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Typed from 'typed.js';
import { ServicesList } from './data/ServicesList.js'
import { UiProjectList } from './data/UiProjectList.js'
import { ExperiencesList } from './data/ExperiencesList.js'
import HeroImage from './assets/images/heroimagesnew.svg'
import AboutImage from './assets/images/image3.svg'
import { FaCircleChevronRight } from "react-icons/fa6";

function App() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Danuar Wiranata', 'an UI/UX Designer'],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='bg-[url("/src/assets/images/bgv4.svg")] bg-contain bg-no-repeat bg-[#111827] overflow-hidden w-full'>
      <Navbar />
      <div className='mx-auto flex flex-col-reverse justify-center md:flex-row items-center md:px-20 my-4 gap-8'>
        <div className='flex flex-col gap-5 text-center items-center w-full'>
          <h5 className='text-sm text-neutral-50 border border-neutral-700 bg-linear-to-t from-neutral-950 via-neutral-800 to-neutral-950 rounded-full px-5 py-2 w-fit'>
            Available for work
          </h5>
          <h1 className='text-6xl font-bold text-neutral-50'>
            Hello, I`m
          </h1>
          <h1 className='text-6xl font-bold bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text'>
            <span ref={el}/>
          </h1>
          <p className='text-neutral-200 text-sm'>
            I help you build strong and scalable product,
          </p>
          <a href="#" className='text-base text-neutral-50 border border-neutral-700 bg-linear-to-t from-neutral-950 via-neutral-800 to-neutral-950 rounded-full px-6 py-3 w-fit hover:drop-shadow-[0_0_16px_rgba(11,28,248,0.75)]'>Contact me</a>
          <img src={HeroImage} alt="" className='scale-80'/>
        </div>
      </div>

      <div className='mx-auto flex flex-col-reverse justify-between md:flex-row items-center px-6 md:px-20 my-10 gap-8'>
        <div className='w-full md:w-1/2'>
          {ServicesList.map((item) => (
            <div key={item.id} className="w-fit backdrop-blur-md border border-neutral-700 bg-gradient-to-t from-[rgba(24,24,27,0.1)] via-[rgba(39,39,42,0.1)] to-[rgba(24,24,27,0.1)] p-6 rounded-3xl mt-4 drop-shadow-lg flex items-center">
              <img src={item.image} alt="" className=''/>
              <div className='pl-6 rounded-md flex flex-col gap-2 w-fit'>
                <h4 className='text-2xl font-semibold text-neutral-50'>{item.title}</h4>
                <p className='text-sm text-neutral-200'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-5 w-full md:w-1/2 md:text-left sm:text-center'>
          <h2 className='text-4xl font-bold text-neutral-50'>
            My Awesome Services
          </h2>
          <p className='text-base text-neutral-200'>Lorem ipsum</p>
        </div>
      </div>

      <div className='mx-auto flex flex-col justify-between md:flex-row items-center px-6 md:px-20 my-10 gap-8'>
        <div className='w-full md:w-1/2 flex flex-col gap-6'>
          <h2 className='text-neutral-50 text-4xl font-bold'>Experiences</h2>
          <div className='flex flex-col gap-4'>
            {ExperiencesList.map((item) => (
              <div key={item.id} className='flex flex-col gap-1'>
                <h4 className='text-neutral-50 text-xl font-semibold'>{item.role}</h4>
                <h3 className='text-neutral-50 text-base'>{item.company}</h3>
                <p className='text-neutral-400 text-sm'>{item.date}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={AboutImage} alt="" className=''/>
      </div>

      <div className='mx-auto flex flex-col justify-between items-center my-10 md:px-20 sm:px-10'>
        <h2 className='text-center text-4xl font-bold text-neutral-50'>
          Portfolio Showcase
        </h2>
        <p className='text-base text-neutral-200 mt-2'>Here`s my latest project & portfolio</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto mt-8'>
        {UiProjectList.map((item) => (
          <div key={item.id} className='w-full flex flex-col gap-4 hover:scale-105'>
            <img src={item.image} alt="Portfolio showcase" className='transition duration-300 hover:brightness-75 rounded-md'/>
            <div className='flex justify-between items-end'>
              <div className='flex flex-col gap-2 w-3/4'>
                <h6 className='text-xl font-bold text-neutral-50'>
                  {item.title}
                </h6>
                <p className='text-base text-neutral-200'>
                  {item.subtitle}
                </p>
              </div>
              <FaCircleChevronRight size={24} className='fill-blue-800'/>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className='flex flex-col mx-16 backdrop-blur-md border border-neutral-700 bg-gradient-to-t from-[rgba(24,24,27,0.1)] via-[rgba(39,39,42,0.1)] to-[rgba(24,24,27,0.1)] p-6 rounded-3xl px-16 py-12 text-neutral-50 gap-3 items-center'>
        <h4 className='text-3xl font-bold'>Got a project?</h4>
        <h4 className='text-xl'>Let`s start</h4>
        <a href="#" className='bg-neutral-50 text-blue-800 px-6 py-2 rounded-full w-fit'>Contact me</a>
      </div>
      <Footer/>
    </div>
  )
}

export default App
