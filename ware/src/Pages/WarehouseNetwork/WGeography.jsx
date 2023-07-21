import React from 'react'
import Header from '../Homepage/Components/Header/Header'
import Footer from '../Homepage/Components/Footer/Footer'
import Copyrights from '../Homepage/Components/Footer/Copyrights'
import GMap from "./Assets/Gmap.png"
import "./WarehouseNetwork.css"

export default function WGeography() {
  return (
    <div>
        <Header/>
        <section className='profile p-overview w-geography'>
            <h6>Warehouse Network</h6>
            <h1>Geography Wise</h1>
            <img src={GMap} alt="" />
        </section>
        <Footer/>
        <Copyrights/>
    </div>
  )
}
