import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                console.log(data);
            })
    }, [])

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-bold'>Jobs of the day</h1>
                <p className='text-xl font-normal'>Search and connect with the right candidates faster.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;