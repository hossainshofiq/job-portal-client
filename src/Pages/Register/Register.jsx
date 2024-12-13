import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import lottieRegister from '../../assets/LottieFiles/register.json'
import Swal from 'sweetalert2';
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Register = () => {

    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const userName = form.userName.value;
        const password = form.password.value;
        const rePassword = form.rePassword.value;
        console.log(fullName, email, userName, password, rePassword);

        // password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password must have at least one uppercase, one lowercase, and be at least 6 character long.')
            // Swal.fire({
            //     icon: "error",
            //     title: "Oops...",
            //     text: "Something went wrong!",
            //     footer: '<a href="#">Why do I have this issue?</a>'
            // });

        }
        // setError('');

        createUser(email, password)
            .then(result => {
                console.log(result.user);
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
                    <button className='btn w-full max-w-sm'>Sign up with Google</button>
                    <div className='divider'>Or continue with</div>
                </div>
                <div className="card w-full max-w-sm">
                    <form onSubmit={handleRegister} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Full Name *</span>
                            </label>
                            <input name='fullName' type="name" placeholder="Steven Job" className="input input-bordered rounded-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email *</span>
                            </label>
                            <input name='email' type="email" placeholder="stevenjob@gmial.com" className="input input-bordered rounded-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username *</span>
                            </label>
                            <input name='userName' type="name" placeholder="stevenjob" className="input input-bordered rounded-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password *</span>
                            </label>
                            <input name='password' type="password" placeholder="********" className="input input-bordered rounded-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Re-Password *</span>
                            </label>
                            <input name='rePassword' type="password" placeholder="********" className="input input-bordered rounded-sm" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-md text-white bg-blue-900 hover:bg-blue-600">Submit&Register</button>
                        </div>
                        {error && (
                            <p className='text-sm text-red-600 mt-2 text-center'>{error} </p>
                        )}

                        <p className='text-center mt-2'>Already have an Account?<Link to='/signin' className='text-red-600 underline'>Signin</Link> </p>
                    </form>
                </div>
            </div>
            <div className='col-span-4'>
                <Lottie animationData={lottieRegister}></Lottie>
            </div>
        </div>
    );
};

export default Register;