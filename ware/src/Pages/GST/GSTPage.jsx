import React from 'react'
import Header from '../Homepage/Components/Header/Header'
import Footer from '../Homepage/Components/Footer/Footer'
import Copyrights from '../Homepage/Components/Footer/Copyrights'
import Data from './GST.json'
import GSTTableTemplate from './GSTTableTemplate'
import GST1 from "./Assets/gst1.pdf"
import GST2 from "./Assets/gst2.pdf"
import GST3 from "./Assets/gst3.pdf"
import GST4 from "./Assets/gst4.pdf"
import GST5 from "./Assets/gst5.pdf"
import GST6 from "./Assets/gst6.pdf"
import GST7 from "./Assets/gst7.pdf"
import GST8 from "./Assets/gst8.pdf"
import GST9 from "./Assets/gst9.xlsx"
import GST10 from "./Assets/gst10.docx"
import GST11 from "./Assets/gst11.pdf"
import GST12 from "./Assets/gst12.pdf"
import GST13 from "./Assets/gst13.pdf"
import GST14 from "./Assets/gst14.xlsx"
import "./GSTPage.css"

const files = [
    GST1,
    GST2,
    GST3,
    GST4,
    GST5,
    GST6,
    GST7,
    GST8,
    GST9,
    GST10,
    GST11,
    GST12,
    GST13,
    GST14,
    "https://cbic-gst.gov.in/",
    "https://cbic-gst.gov.in/",
    "https://cbic-gst.gov.in/"
]

export default function GSTPage() {
  return (
    <div>
        <Header/>
        <section className='profile p-overview gst-p'>
            <h1>GST</h1>GST1 from "./Assets/gst1.pdf"
            <table>
                <tr>
                    <th>
                        SNo.
                    </th>
                    <th>
                        Subject
                    </th>
                </tr>
                <GSTTableTemplate
                    data={Data}
                    files={files}
                />
            </table>
        </section>
        <Footer/>
        <Copyrights/>
    </div>
  )
}
