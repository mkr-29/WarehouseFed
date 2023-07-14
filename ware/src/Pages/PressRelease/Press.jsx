import React from 'react'
import Header from '../Homepage/Components/Header/Header'
import Footer from '../Homepage/Components/Footer/Footer'
import Copyrights from '../Homepage/Components/Footer/Copyrights'
import './Press.css'

export default function Press() {
  return (
    <div>
        <Header/>
        <section className='profile p-overview press-rel'>
            <h1>Press Release</h1>
            <h6>All Press Release:</h6>
        </section>
        <Footer/>
        <Copyrights/>
    </div>
  )
}
