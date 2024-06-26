import React, { useEffect, useState } from 'react';
import './Navbar.css'
import TSI_Image from './Images/tsi.png'
import { NavLink, useLocation } from "react-router-dom";
import { scroll } from '../util'
import Triangle from './Images/triangle.png'

const Navbar = () => {
    const location = useLocation();
    const category_path = location.pathname
    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentDateTime(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <div className='navbar'>
             <NavLink to="/" onClick={scroll}>
                <img src={TSI_Image} alt='logo' className='logo'/>
             </NavLink>
             <div className='navbarList'>
                <div className='item'>
                        <img src={Triangle} alt='logo' className='triangle'/>
                        <NavLink className={`itemText ${category_path === '/' ? "active-link" : ""}`} 
                            to="/">Records
                        </NavLink>
                </div>
                <div className='item'>
                        <img src={Triangle} alt='logo' className='triangle'/>
                        <NavLink className={`itemText ${category_path === '/addGame' ? "active-link" : ""}`} 
                            to="/addGame">Add Game
                        </NavLink>
                </div>
                <div className='item'>
                        <img src={Triangle} alt='logo' className='triangle'/>
                        <NavLink className={`itemText ${category_path === '/addApp' ? "active-link" : ""}`} 
                            to="/addApp">Add App
                        </NavLink>
                </div>
                <div className='item'>
                        <img src={Triangle} alt='logo' className='triangle'/>
                        <NavLink className={`itemText ${category_path === '/addJackpot' ? "active-link" : ""}`} 
                            to="/addJackpot">Add Jackpot
                        </NavLink>
                </div>
                <div className='item'>
                        <img src={Triangle} alt='logo' className='triangle'/>
                        <NavLink className={`itemText ${category_path === '/addMath' ? "active-link" : ""}`} 
                            to="/addMath">Add Math
                        </NavLink>
                </div>
                <div className='item'>
                        <img src={Triangle} alt='logo' className='triangle'/>
                        <NavLink className={`itemText ${category_path === '/contacts' ? "active-link" : ""}`} 
                            to="/contacts">Contacts
                        </NavLink>
                </div>
                <div className="dateTime">
                    {currentDateTime}
                </div>
            </div>
        </div>
    )
}

export default Navbar