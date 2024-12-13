import React, { useContext } from 'react';
import lottieLogin from '../../assets/LottieFiles/login.json'
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Signin = () => {

    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log('Sign in success', result.user);
                navigate ('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen grid grid-cols-12">
            <div className="hero-content flex-col col-span-8">
                <div className="text-center">
                    <p className='text-2xl font-semibold mb-2 text-blue-700'>Register</p>
                    <h1 className="text-5xl font-bold mb-1">Start for free Today</h1>
                    <p className="">
                        access to all features. No credit cart required.
                    </p>
                </div>
                <div className='w-full max-w-sm'>
                    <button className='btn w-full max-w-sm'>Sign in with Google</button>
                    <div className='divider'>Or continue with</div>
                </div>
                <div className="card w-full max-w-sm">
                    <form onSubmit={handleSignin} className="">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username or Email address*</span>
                            </label>
                            <input name='email' type="email" placeholder="stevenjob@gmial.com" className="input input-bordered rounded-sm" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password *</span>
                            </label>
                            <input name='password' type="password" placeholder="********" className="input input-bordered rounded-sm" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn rounded-md text-white bg-blue-900 hover:bg-blue-600">Login</button>
                        </div>

                        <p className='text-center mt-2'>Don't have an Account?<Link to='/register' className='text-red-600 underline'>register</Link> </p>
                    </form>
                </div>
            </div>
            <div className='col-span-4'>
                <Lottie animationData={lottieLogin}></Lottie>
            </div>
        </div>
    );
};

export default Signin;