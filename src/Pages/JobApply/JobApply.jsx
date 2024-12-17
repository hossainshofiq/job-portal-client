import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { use } from 'react';
import Swal from 'sweetalert2';

const JobApply = () => {

    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    // console.log(id, user);

    const submitJobApplication = (e) => {
        e.preventDefault();

        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedin, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume,
        }
        fetch('https://job-portal-sever.vercel.app/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your application is completed successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplications')
                }
            })
    }
    return (
        <div className="card bg-base-100 w-full shadow-2xl border max-w-7xl mx-auto my-10">
            <h1 className="text-5xl font-bold text-center mt-4">Apply Job and Good Luck!</h1>
            <form onSubmit={submitJobApplication} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input name='linkedin' type="url" placeholder="linkedin URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">GitHub URL</span>
                    </label>
                    <input name='github' type="url" placeholder="github URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input name='resume' type="url" placeholder="resume URL" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white bg-blue-600 hover:bg-blue-900">Apply Now</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;