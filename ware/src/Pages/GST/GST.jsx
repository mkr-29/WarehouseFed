import React from 'react'
import Header from '../Homepage/Components/Header/Header'
import Footer from '../Homepage/Components/Footer/Footer'
import Copyrights from '../Homepage/Components/Footer/Copyrights'

export default function GST() {
  return (
    <div>
        <Header/>
        <section className='profile p-overview'>
            <h1>GST</h1>
            <table>
                <tr>
                    <th>
                        SNo.
                    </th>
                    <th>
                        Subject
                    </th>
                </tr>
                
            </table>
        </section>
        <Footer/>
        <Copyrights/>
    </div>
  )
}
