import React from 'react'
import Header from '../Homepage/Components/Header/Header'
import Footer from '../Homepage/Components/Footer/Footer'
import Copyrights from '../Homepage/Components/Footer/Copyrights'
import {Link} from "react-router-dom"

export default function WarehouseNetwork() {
  return (
    <div>
        <Header/>
        <section className='profile p-overview'>
            <h1>Warehouse Network</h1>
            <div className='ppdf-links'>
                <Link to="/warehouse-network/networks">Circle / District Wise</Link>
                <Link to="/warehouse-network/geography">Geography Wise</Link>
            </div>
        </section>
        <Footer/>
        <Copyrights/>
    </div>
  )
}
