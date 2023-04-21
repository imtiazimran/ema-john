import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password  = form.password.value
        
    }
    return (
        <div className='form-container'>
            <h2 className="form-title"> Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>
                <div className="form-control">
                    <button className='form-btn'> Log In</button>
                    <p>New to Ema-john? <Link to="/signup">Sign Up</Link></p>
                </div>
                <div className="form-control">
                    <button className="form-btn google-login"><img src="https://i0.wp.com/nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png?fit=1000%2C1000&ssl=1" alt="" />Continue With Google</button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;