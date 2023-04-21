import React from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'
import { Link} from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <div>
                <ActiveLink to="/">Shop</ActiveLink>
                <ActiveLink to="/order_review">Order Review</ActiveLink>
                <ActiveLink to="/Inventory">Manage Inventory</ActiveLink>
                <ActiveLink to="/login">Log In</ActiveLink>
                <ActiveLink to="/signup">Sign Up</ActiveLink>
            </div>
        </nav>
    );
};

export default Header;