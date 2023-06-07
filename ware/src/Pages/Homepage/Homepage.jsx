import React from 'react'
import './Homepage.css'
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'

export default function Homepage() {
  return (
    <div className='homepage'>
      <Header/>
      <Landing/>
    </div>
  )
}
