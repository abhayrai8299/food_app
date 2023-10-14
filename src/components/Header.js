import React, { useState } from 'react'
import food_logo from '../images/food_logo2.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
    const [btnNameReact,setBtnNameReact]=useState("Login");
    
    const onlineStatus=useOnlineStatus();

    return (
        <div className='flex justify-between bg-pink-100'>
            <div className='logo-contianer'>
                <img className='w-64' alt='food' src={food_logo}></img>
            </div>
            <div className='flex items-center'>
                <ul className='flex p-4 m-4'>
                    <li className='px-4'>
                        Online Status:{onlineStatus?"Online":"Offline"}
                    </li>
                    <li className='px-4'>
                    <Link to='/'>Home</Link>
                    </li>
                    <li className='px-4'>
                    <Link to="/about">About Us</Link>
                    </li>
                    <li className='px-4'>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className='px-4'>
                    <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className='px-4'> Cart</li>
                    <button className='login' onClick={()=>{
                        btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header