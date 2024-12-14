import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const { user, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const isLoginPage = location.pathname === '/signin'
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn w-full btn-success'>{isLoginPage ? 'Sign in with Google' : 'Sign up with google'} </button>
        </div>
    );
};

export default SocialLogin;