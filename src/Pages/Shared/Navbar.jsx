import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import logo from '../../assets/jobs-logo.png'

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                // console.log('Successfully sign out');
            })
            .catch(error => {
                // console.log('Sign out error');
            })
    }

    const links = <>
        <div className='flex gap-2'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/myApplications'>My Applications</NavLink></li>
            <li><NavLink to='/addJob'>Add Job</NavLink></li>
            <li><NavLink to='/myPostedJobs'>My Posted Jobs</NavLink></li>
        </div>

    </>
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className='w-10 h-10' src={logo} alt="" />
                    <h3>Job Portal</h3>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user ?
                        <>
                            <button onClick={handleSignOut} className="btn text-white bg-blue-500 hover:bg-blue-900">Sign out</button>
                        </>
                        :
                        <>
                            <Link className='underline hover:text-blue-700 transition-transform transform hover:-translate-y-1' to='/register'>Register</Link>
                            <Link to='/signin'>
                                <button className="btn text-white bg-blue-500 hover:bg-blue-900 transition-transform hover:-translate-y-1">Sign In</button>
                            </Link>
                        </>
                }


            </div>
        </div>
    );
};

export default Navbar;