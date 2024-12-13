import React from 'react';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaDollarSign, FaLocationDot } from 'react-icons/fa6';
import { IoBag } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {

    const { _id, title, company, company_logo, requirements, description, location, salaryRange, jobType } = job;

    return (
        <div className="card bg-base-100 border shadow-xl">
            <div className='flex gap-2 m-3'>
                <figure>
                    <img
                        className='w-16 '
                        src={company_logo}
                        alt={company_logo} />
                </figure>
                <div>
                    <h4 className='text-xl font-bold'>{company} </h4>
                    <p className='flex items-center text-sm text-gray-500 gap-1'><FaLocationDot></FaLocationDot> {location} </p>
                </div>
                <div className=' text-green-600'>
                    <BsFillLightningChargeFill></BsFillLightningChargeFill>
                </div>
            </div>
            <div className="card-body space-y-2">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='flex items-center gap-2 text-gray-500'><IoBag></IoBag> {jobType} </p>
                <p>{description} </p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        requirements.map((skill, index) =>
                            <p key={index} className='border rounded-md text-sm text-center px-2 hover:text-blue-500'>{skill} </p>
                        )
                    }
                </div>
                <div className="card-actions">

                    <p className='flex items-center'>Salary:<FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency} </p>
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn bg-gray-100 text-blue-500 hover:bg-blue-800 hover:text-white">Job Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;