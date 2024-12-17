import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const AddJob = () => {

    const {user} = useAuth();
    const navigate = useNavigate();

    const handleAddJob = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        // console.log(formData.entries());
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);
        const { min, max, currency, ...newJob } = initialData;
        // console.log(min, max, currency, newJob);
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob);

        // 
        fetch('https://job-portal-sever.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your application is added successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myPostedJobs')
                }
            })
    }
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h2 className='text-3xl font-bold text-center mb-10'>Post a new job</h2>

            <div className="card bg-base-100 w-full shadow-2xl border">
                <form onSubmit={handleAddJob} className="card-body">
                    {/* job title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input name='title' type="text" placeholder="job title" className="input input-bordered" required />
                    </div>
                    {/* job location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Location</span>
                        </label>
                        <input name='location' type="text" placeholder="Job Location" className="input input-bordered" required />
                    </div>
                    {/* job type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Type</span>
                        </label>
                        <select defaultValue='Pick the job type' className="select select-ghost w-full max-w-xs">
                            <option disabled>Pick the job type</option>
                            <option>Full-time</option>
                            <option>Intern</option>
                            <option>Part-time</option>
                        </select>
                    </div>
                    {/* job category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Field</span>
                        </label>
                        <select defaultValue="Pick the job Field" className="select select-ghost w-full max-w-xs">
                            <option disabled>Pick the job Field</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                        </select>
                    </div>
                    {/* salary range */}
                    <p className='mt-3'>Salary Range</p>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 items-end'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <input name='min' type="text" placeholder="Min" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name='max' type="text" placeholder="Max" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <select defaultValue="Choose your Currency" name="currency" className="select select-ghost w-full max-w-xs">
                                <option disabled>Choose your Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>INR</option>
                            </select>
                        </div>
                    </div>
                    {/* job description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered" placeholder="Job Description" required></textarea>
                    </div>
                    {/* Company Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input name='company' type="text" placeholder="Company Name" className="input input-bordered" required />
                    </div>
                    {/* requirements */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Requirements</span>
                        </label>
                        <textarea name='requirements' className="textarea textarea-bordered" placeholder="Put each requirement in a new line" required></textarea>
                    </div>
                    {/* responsibilities */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Responsibilities</span>
                        </label>
                        <textarea name='responsibilities' className="textarea textarea-bordered" placeholder="Put each responsibility in a new line" required></textarea>
                    </div>
                    {/* HR name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Name</span>
                        </label>
                        <input name='hr_name' type="text" placeholder="HR Name" className="input input-bordered" required />
                    </div>
                    {/* HR Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Email</span>
                        </label>
                        <input defaultValue={user?.email} name='hr_email' type="email" placeholder="HR Email" className="input input-bordered" required />
                    </div>
                    {/* application deadline */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <input name='deadline' type="date" placeholder="deadline" className="input input-bordered" required />
                    </div>
                    {/* company logo url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company logo URL</span>
                        </label>
                        <input name='company_logo' type="text" placeholder="Company Logo URl" className="input input-bordered" required />
                    </div>
                    {/* submit form */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;