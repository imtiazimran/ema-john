import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthProvider';

const LogIn = () => {
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        
        if (password.length < 6) {
            setError('password should be 6 charecter or more')
            return
        } else { setError('') }
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                form.reset()
                navigate(from)
            })
            .catch(error => {
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