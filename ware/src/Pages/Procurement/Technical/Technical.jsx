import React from 'react'
import Header from '../../Homepage/Components/Header/Header'
import Footer from '../../Homepage/Components/Footer/Footer'
import Copyrights from '../../Homepage/Components/Footer/Copyrights'
import PD1 from "../Assets/pd1.pdf"
import PD2 from "../Assets/pd2.pdf"
import PD3 from "../Assets/pd3.pdf"
import PD4 from "../Assets/pd4.pdf"
import PD5 from "../Assets/pd5.pdf"
import PD6 from "../Assets/pd6.pdf"
import PD7 from "../Assets/pd7.pdf"
import PD8 from "../Assets/pd8.pdf"
import PD9 from "../Assets/pd9.pdf"
import PD10 from "../Assets/pd10.pdf"
import PD11 from "../Assets/pd11.pdf"
import PD12 from "../Assets/pd12.pdf"
import PD13 from "../Assets/pd13.pdf"
import PD14 from "../Assets/pd14.pdf"

export default function Technical() {
  return (
    <div>
        <Header/>
        <section className='profile p-overview'>
            <h6>Procurement</h6>
            <h1>Technical Reports</h1>
            <div className='ppdf-links'>
                <a href={PD1} target="_blank">Wheat Norms Storage Loss Gain Govt of India</a>
                <a href={PD2} target="_blank">Guidelines for procurement</a>
                <a href={PD3} target="_blank">Amendment in Rule 28 Storage Gain Loss in Wheat</a>
                <a href={PD4} target="_blank">Guidelines for procurement of Paddy and Custom Milling of paddy Milling</a>
                <a href={PD5} target="_blank">Replacement of Gunnies Norms</a>
                <a href={PD6} target="_blank">Overview of Procurement of Wheat Paddy Bajra Moong Mustard Sunflower and Gram</a>
                <a href={PD7} target="_blank">Protocol of Procurement of Bajra in KMS 2020-21</a>
                <a href={PD8} target="_blank">Regarding norrns for storage gain in wheat</a>
                <a href={PD9} target="_blank">Safety of stocks</a>
                <a href={PD10} target="_blank">Disposal Instruction of Sunflower</a>
                <a href={PD11} target="_blank">Terms & Condition for Bajra Auction</a>
                <a href={PD12} target="_blank">Terms and Conditions for Sale of Mustard Seed of Rabi-2020 MSTC</a>
                <a href={PD13} target="_blank">Terms and conditions for sale of sunflower seed of Rabi 2020</a>
                <a href={PD14} target="_blank">Norms for Storage Gain for Wheat</a>
            </div>
        </section>
        <Footer/>
        <Copyrights/>
    </div>
  )
}
