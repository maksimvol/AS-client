import React from 'react';
import './Footer.css'
import TSI_Image from './Images/tsi.png'

const Footer = () => {
    return (
        <div className='footer'>
            <center><img src={TSI_Image} alt='logo' className="logo"/></center>
        </div>
    )
}

export default Footer