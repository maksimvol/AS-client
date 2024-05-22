import React from 'react';
import './Footer.css'
import TSI_Gif from './Images/tsi_spinning.gif'

const Footer = () => {
    return (
        <div className='footer'>
            <center><img src={TSI_Gif} alt='logo_gif' className="logo_gif"/></center>
        </div>
    )
}

export default Footer