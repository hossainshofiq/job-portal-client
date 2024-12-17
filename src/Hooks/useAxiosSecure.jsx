import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://job-portal-sever.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {

    const { signOutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('Error caught in the interceptors', error);

            if (error.status === 401 || error.status === 403) {
                // console.log('Need to log out the user');
                signOutUser()
                .then(() => {
                    // console.log('Logged out user');
                    navigate('/signIn')
                })
                .catch(error => {
                    console.log(error);
                })
            }
            return Promise.reject(error);
        })
    }, [])
    return axiosInstance;
};

export default useAxiosSecure;