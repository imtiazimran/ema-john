import React, { useContext } from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'
import { Link} from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../firebase/AuthProvider';


const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            alert('sign out successful')
        })
        .catch(error =>{
            alert(error.message)
        })
    }
    return (
        <nav className='header'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <div>
                <ActiveLink to="/">Shop</ActiveLink>
                <ActiveLink to="/order_review">Order Review</ActiveLink>
                <ActiveLink to="/Inventory">Manage Inventory</ActiveLink>
                <ActiveLink to="/login">Log In</ActiveLink>
                <ActiveLink to="/signup">Sign Up</ActiveLink>
                {user && <span>Welcome Back {user.email} <button className='signOut' onClick={handleLogOut}>Sign Out</button></span>  }
            </div>
        </nav>
    );
};

export default Header;