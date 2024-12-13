import React from 'react';
import { easeOut, motion } from "framer-motion";
import team1 from '../../assets/Team/team1.jpg'
import team2 from '../../assets/Team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-96 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-500 shadow-2xl" />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        className="max-w-sm w-72 rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-500 shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">
                        The <motion.span
                            animate={{ color: ['#0f72f8', '#ff3933'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >Easiest Way
                        </motion.span> to Get Your New Job
                    </motion.h1>
                    <p className="py-6">
                        Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                    <p className='mt-2'>Popular Searches: <span className='underline'>Designer, Web, IOS, Developer, PHP, Senior, Engineer,</span></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;