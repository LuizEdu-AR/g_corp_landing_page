import React from 'react'

import HomePage from '../components/HomePage'
import ServicesPage from '../components/ServicesPage'
import Time from '../components/Time'
import Contact from '../components/Contact'

import './MainPage.css'

const MainPage = () => {
  return (
    <div className='mainpage'>
        <HomePage />
        <ServicesPage />
        <Time />
        <Contact />
    </div>
  )
}

export default MainPage