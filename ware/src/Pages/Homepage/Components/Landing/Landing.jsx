import React from 'react';
import "./Landing.css";
import Carousel1 from './Carousel1';
import {Link} from "react-router-dom";
import Asset1 from "./Assets/asset1.svg";

export default function Landing() {
  return (
    <div className='landing'>
        <img src={Asset1} alt="" className='asset-1' />
        <div className="landing-l">
            <Carousel1
                heading1="For all your Warehousing needs"
                subheading1="Your Trustworthy Partner"
                about1="Unlocking Your Storage Potential: Discover a warehousing partner that harnesses 
                advanced technologies and strategic expertise to unlock the full potential 
                of your storage capabilities, empowering your business for growth and success."
                heading2="For all your Warehousing needs"
                subheading2="Your Trustworthy Partner"
                about2="Unlocking Your Storage Potential: Discover a warehousing partner that harnesses 
                advanced technologies and strategic expertise to unlock the full potential 
                of your storage capabilities, empowering your business for growth and success."
            />
        </div>
        <div className="landing-r">
            <h3>Quick Links</h3>
            <div className="landing-rql">
                <Link to=''>E-Governance Login</Link>
                <Link to=''>Employee Corner</Link>
                <Link to=''>Farmer Registration</Link>
                <Link to=''>Scientific Storage</Link>
                <Link to=''>Farmer Registration</Link>
                <Link to=''>Scientific Storage</Link>
            </div>
        </div>
    </div>
  )
}
