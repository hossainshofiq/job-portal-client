import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import MainLayout from '../Layout/MainLayout';
import Register from '../Pages/Register/Register';
import ErrorPage from '../Pages/ErrorPage';
import Signin from '../Pages/Signin/Signin';
import JobDetails from '../Pages/JobDetails/JobDetails';
import PrivateRoute from './PrivateRoute';
import JobApply from '../Pages/JobApply/JobApply';
import MyApplications from '../Pages/MyApplications/MyApplications';
import AddJob from '../Pages/AddJob/AddJob';
import MyPostedJobs from '../Pages/MyPostedJobs/MyPostedJobs';
import ViewApplications from '../Pages/ViewApplications/ViewApplications';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute>
                    <JobDetails></JobDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-portal-sever.vercel.app/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute>
                    <JobApply></JobApply>
                </PrivateRoute>
            },
            {
                path: '/myApplications',
                element: <PrivateRoute>
                    <MyApplications></MyApplications>
                </PrivateRoute>
            },
            {
                path: '/addJob',
                element: <PrivateRoute>
                    <AddJob></AddJob>
                </PrivateRoute>
            },
            {
                path: '/myPostedJobs',
                element: <PrivateRoute>
                    <MyPostedJobs></MyPostedJobs>
                </PrivateRoute>
            },
            {
                path: '/viewApplications/:job_id',
                element: <PrivateRoute>
                    <ViewApplications></ViewApplications>
                </PrivateRoute>,
                loader: ({params}) => fetch(`https://job-portal-sever.vercel.app/job-applications/jobs/${params.job_id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;