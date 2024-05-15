import React from 'react';
import './Navbar.css'
import TSI_Image from './Images/tsi.png'
import { NavLink, useLocation } from "react-router-dom";
import { scroll } from '../util'

const Navbar = () => {
    const location = useLocation();
    const category_path = location.pathname
    const currentDate = new Date();

    return (
        <div className='navbar'>
             <NavLink to="/" onClick={scroll}>
                <img src={TSI_Image} alt='logo' className='logo'/>
             </NavLink>
             <div className='navbarList'>
                <div className='item'>
                    <div className='itemImage'></div>
                        <NavLink className={`itemText ${category_path === '/' ? "active-link" : ""}`} 
                            to="/">Game Mix
                        </NavLink>
                </div>
                <div className='item'>
                    <div className='itemImage'></div>
                        <NavLink className={`itemText ${category_path === '/addGame' ? "active-link" : ""}`} 
                            to="/addGame">Add Game
                        </NavLink>
                </div>
                <div className='item'>
                    <div className='itemImage'></div>
                        <NavLink className={`itemText ${category_path === '/addApp' ? "active-link" : ""}`} 
                            to="/addApp">Add App
                        </NavLink>
                </div>
                <div className='item'>
                    <div className='itemImage'></div>
                        <NavLink className={`itemText ${category_path === '/addJackpot' ? "active-link" : ""}`} 
                            to="/addJackpot">Add Jackpot
                        </NavLink>
                </div>
                <div className='item'>
                    <div className='itemImage'></div>
                        <NavLink className={`itemText ${category_path === '/addMath' ? "active-link" : ""}`} 
                            to="/addMath">Add Math
                        </NavLink>
                </div>
                <div className='item'>
                    <div className='itemImage'></div>
                        <NavLink className={`itemText ${category_path === '/contact' ? "active-link" : ""}`} 
                            to="/contact">Contact
                        </NavLink>
                </div>
                <div className="item">
                    {currentDate.toLocaleString()}
                </div>
            </div>
        </div>

    )
}

export default Navbar