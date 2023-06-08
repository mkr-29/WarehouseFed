import React from 'react'
import './Homepage.css'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Footer from './Components/Footer/Footer'
import Copyrights from './Components/Footer/Copyrights'

export default function Homepage() {
  return (
    <div className='homepage'>
      <Header/>
      <Landing/>
      <Footer/>
      <Copyrights/>
    </div>
  )
}
