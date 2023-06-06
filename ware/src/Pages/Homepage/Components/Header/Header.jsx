import React from 'react'
import './Header.css'
import HeaderUp from './HeaderUp'
import HeaderDown from './HeaderDown'

export default function Header() {
  return (
    <div className='head-main'>
        <HeaderUp/>
        <span>WareHouse Fed</span>
        <HeaderDown/>
    </div>
  )
}
