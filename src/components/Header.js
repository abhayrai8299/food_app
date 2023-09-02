import React, { useState } from 'react'
import food_logo from '../images/food_logo2.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
    const [btnNameReact,setBtnNameReact]=useState("Login");
    
    const onlineStatus=useOnlineStatus();

    return (
        <div className='header'>
            <div className='logo-contianer'>
                <img className='logo' alt='food' src={food_logo}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        Online Status:{onlineStatus?"Online":"Offline"}
                    </li>
                    <li>
                    <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About Us</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className='login' onClick={()=>{
                        btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header