import React from 'react'
import Header from '../Homepage/Components/Header/Header'
import Footer from '../Homepage/Components/Footer/Footer'
import Copyrights from '../Homepage/Components/Footer/Copyrights'

export default function News() {
  return (
    <div>
        <Header/>
        <section className='profile p-overview'>
            <h1>All News and Updates</h1>
        </section>
        <Footer/>
        <Copyrights/>
    </div>
  )
}
