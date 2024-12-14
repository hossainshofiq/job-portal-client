import React from 'react';
import { IoBag } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router-dom';
import jobDetailsImage from '../../assets/Team/team2.jpg'
import { FaDollarSign, FaLocationDot } from 'react-icons/fa6';
import { HiBuildingOffice } from 'react-icons/hi2';
import { FiWatch } from 'react-icons/fi';

const JobDetails = () => {

    const { _id, title, company, company_logo, requirements, description, location, salaryRange, jobType, applicationDeadline } = useLoaderData();
    // console.log(job);
    return (
        <div className='max-w-5xl mx-auto border p-5 rounded-lg space-y-9 my-10'>
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl font-bold'>Job details for : {title} </h2>
                    <button className='btn bg-blue-600 hover:bg-blue-900 text-white'>Apply Now</button>
                </div>
                <div className='flex items-center text-gray-500 gap-2'>
                    <IoBag></IoBag> {jobType}
                </div>
            </div>
            <div className='divider'></div>
            <img className='rounded-3xl' src={jobDetailsImage} alt="" />
            <div className='border rounded-lg p-5'>
                <h3 className='text-3xl font-bold'>Overview</h3>
                <div className='divider'></div>
                <div className='text-gray-500 space-y-2 grid grid-cols-2'>
                    <p className='flex items-center gap-2'>Company : <HiBuildingOffice></HiBuildingOffice> {company} </p>
                    <p className='flex items-center gap-2'>Salary : <FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} </p>
                    <p className='flex items-center gap-2'>Job Type : <IoBag></IoBag> {jobType} </p>
                    <p className='flex items-center gap-2'>Location : <FaLocationDot></FaLocationDot> {location} </p>
                    <p className='flex items-center gap-2'>Deadline : <FiWatch></FiWatch> {applicationDeadline} </p>
                </div>
            </div>
            <div className='divider'></div>
            <div className='space-y-5'>
                <div>
                    <h2>Welcome to AliStudio Team</h2>
                    <p>The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.</p>
                    <p>The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.</p>
                </div>

                <div>
                    <h2>Essential Knowledge, Skills, and Experience</h2>

                    <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                    <li>5+ years of industry experience in interactive design and / or visual design
                        Excellent interpersonal skills</li>
                    <li>Aware of trends inmobile, communications, and collaboration</li>
                    <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                    <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                    <li>History of impacting shipping products with your work</li>
                    <li>A Bachelor's Degree in Design (or related field) or equivalent professional experience</li>
                    <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                </div>


                <div>
                    <h2>Preferred Experience</h2>
                    <li>Designing user experiences for enterprise software / services</li>
                    <li>Creating and applying established design principles and interaction patterns</li>
                    <li>Creating and applying established design principles and interaction patterns</li>
                </div>

                <div>
                    <h2>Product Designer</h2>
                    <p>Product knowledge: Deeply understand the technology and features of the product area to which you are assigned.</p>
                    <p>Research: Provide human and business impact and insights for products.</p>
                    <p>Deliverables: Create deliverables for your product area (for example competitive analyses, user flows, low fidelity wireframes, high fidelity mockups, prototypes, etc.) that solve real user problems through the user experience.</p>
                    <p>Communication: Communicate the results of UX activities within your product area to the design team department, cross-functional partners within your product area, and other interested Superformula team members using clear language that simplifies complexity.</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <Link to={`/jobApply/${_id}`}><button className='btn bg-blue-600 hover:bg-blue-900 text-white'>Apply Now</button></Link>
                <button className='btn bg-blue-600 hover:bg-blue-900 text-white'>Save Job</button>
            </div>
        </div>
    );
};

export default JobDetails;