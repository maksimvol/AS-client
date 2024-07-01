import React from 'react';
import './Footer.css'
import DLV_Logo from './Images/dlv.png'
import { NavLink, useLocation  } from 'react-router-dom';
import { scroll } from '../util';

const Footer = () => {
    const location = useLocation();
    const category_path = location.pathname
    return (
        <div className='footer'>
            <NavLink to={category_path} onClick={scroll}>
                <center><img src={DLV_Logo} alt='logo' className="logo"/></center>
            </NavLink>
        </div>
    )
}

export default Footer