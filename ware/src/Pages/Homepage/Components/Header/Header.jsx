import React from 'react'
import './Header.css'
import Logo1 from "./Assets/logo1.png"
import Logo2 from "./Assets/logo2.png"
import { Link } from 'react-router-dom'
import Drop from "./Assets/drop.svg"

export default function Header() {
  return (
    <div id='header'>
        <div className="h-logos">
            <img src={Logo1} alt="logo1" />
            <img src={Logo2} alt="logo2" />
        </div>
        <div className="h-links">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <p>
                        One Stop solution<br/>
                        for everything
                    </p>
                </li>
                <li>
                    <Link to="/gallery">
                        Gallery
                        <img src={Drop} alt="dropdown" />
                    </Link>
                    <p>
                        Glimpse of our<br/>
                        heritage and pride
                    </p>
                </li>
                <li>
                    <Link to="/administration">
                        Administration
                        <img src={Drop} alt="dropdown" />
                    </Link>
                    <p>
                        Our office bearers for<br/>
                        you
                    </p>
                </li>
                <li>
                    <Link to="/mis-dashboard">
                        MIS Dashboard
                        <img src={Drop} alt="dropdown" />
                    </Link>
                    <p>
                        Recent Procurement<br/>
                        information
                    </p>
                </li>
                <li>
                    <Link to="/finance">
                        Finance
                        <img src={Drop} alt="dropdown" />
                    </Link>
                    <p>
                        Collaboration and<br/>
                        business opportunities
                    </p>
                </li>
                <li>
                    <Link to="/procurement">
                        Procurement
                        <img src={Drop} alt="dropdown" />
                    </Link>
                    <p>
                        Collaboration and<br/>
                        business opportunities
                    </p>
                </li>
            </ul>
        </div>
    </div>
  )
}
