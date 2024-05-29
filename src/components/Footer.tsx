import React from 'react';
import './Footer.css'
import TSI_Gif from './Images/tsi_spinning.gif'
import { NavLink, useLocation  } from 'react-router-dom';
import { scroll } from '../util';

const Footer = () => {
    const location = useLocation();
    const category_path = location.pathname
    return (
        <div className='footer'>
            <NavLink to={category_path} onClick={scroll}>
                <center><img src={TSI_Gif} alt='logo_gif' className="logo_gif"/></center>
            </NavLink>
        </div>
    )
}

export default Footer