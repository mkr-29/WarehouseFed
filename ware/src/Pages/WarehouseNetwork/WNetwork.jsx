import React from 'react'
import Header from '../Homepage/Components/Header/Header'
import Footer from '../Homepage/Components/Footer/Footer'
import Copyrights from '../Homepage/Components/Footer/Copyrights'
import NetworkCircleWise from "./JSON/NetworkCircleWise.json"
import NetworkTablesTemplate from './Templates/NetworkTablesTemplate'

export default function WNetwork() {
  return (
    <div>
        <Header/>
        <section className='profile p-overview'>
            <h6>Warehouse Network</h6>
            <h1>Network Circle Wise</h1>
            <table>
              <NetworkTablesTemplate
                data={NetworkCircleWise}
              />
            </table>
        </section>
        <Footer/>
        <Copyrights/>
    </div>
  )
}
