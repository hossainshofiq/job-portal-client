import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
// import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyApplications = () => {

    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        // fetch(`https://job-portal-sever.vercel.app/job-application?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setJobs(data)
        //     })

        // axios.get(`https://job-portal-sever.vercel.app/job-application?email=${user.email}`, { withCredentials: true })
        //     .then(res => {
        //         // console.log(res.data);
        //         setJobs(res.data);
        //     })

        axiosSecure.get(`/job-application?email=${user.email}`)
            .then(res => {
                setJobs(res.data)
            })

    }, [user.email])

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h2 className='text-3xl font-bold mb-3 text-center'>My applications: {jobs.length} </h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Job Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job => <tr key={job._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.title} </div>
                                            <div className="text-sm opacity-50">{job.location} </div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    {job.company}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Deadline: {job.applicationDeadline} </span>
                                </td>

                                <td>
                                    {job.jobType}
                                </td>

                                <th>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;