import React from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order_review">Order Review</Link>
                <Link to="/Inventory">Manage Inventory</Link>
                <Link to="/Log-In">Log-In</Link>
            </div>
        </nav>
    );
};

export default Header;