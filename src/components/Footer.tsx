import React from 'react';
import './Footer.css'
import DLV_Image from './Images/logo_dlv.png'

const Footer = () => {
    return (
        <div className='footer'>
            <center><img src={DLV_Image} alt='logo' className="logo"/></center>
        </div>
    )
}

export default Footer