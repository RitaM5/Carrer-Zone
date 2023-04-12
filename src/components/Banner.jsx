import React from 'react';
const Banner = () => {
    return (
        <div className='bg-gray-200  min-h-full'>
            <div className=' lg:flex lg:justify-between lg:items-center lg:gap-28 md:col-auto sm:col-auto my-container h-full'>
                <div className='space-y-3 '>
                    <p className='text-[#1A1919] font-semibold text-4xl'>
                        One Step Closer To Your
                        <br />
                        <span className='text-[#7E90FE] font-semibold'> Dream Job</span>
                    </p>
                    <p className=''>
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className='bg-[#9873FF] rounded-md text-white text-sm py-2 px-3'>Get Started</button>
                </div>
                <div className='w-full'>
                    <img className='object-cover banner-img mt-6' src="./assets/All Images/banner-img.png" alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;