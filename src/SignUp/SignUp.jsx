import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../firebase/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)
    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password  = form.password.value
        const confirmPassword = form.confirmPassword.value
        if(password !== confirmPassword){
            setError('Password did not Match')
            return
        }
        if(password.length < 6){
            setError('password should be 6 charecter or more')
            return
        }else{setError('')}
        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser)
            form.reset()
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2 className="form-title"> Login</h2>
            {
                error && <p>{error}</p>
            }
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" required />
                </div>
                <div className="form-control">
                    <button className='form-btn'>Sign Up</button>
                    <p>Already Have an Account? <Link to="/login">Sign In</Link></p>
                </div>
                <div className="form-control">
                    <button className="form-btn google-login"><img src="https://i0.wp.com/nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png?fit=1000%2C1000&ssl=1" alt="" />Continue With Google</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;