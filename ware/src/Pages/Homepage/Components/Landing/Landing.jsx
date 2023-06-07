import React from 'react'
import "./Landing.css"
import Carousel1 from './Carousel1'

export default function Landing() {
  return (
    <div className='landing'>
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
    </div>
  )
}
