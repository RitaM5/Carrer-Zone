import React from 'react';
const Banner = () => {
    return (
        <div className='bg-gray-200  min-h-full'>
            <div className=' my-container h-full'>
                <div className='lg:flex lg:justify-around lg:items-center lg:gap-28 md:col-auto sm:col-auto ms-14'>
                <div className='space-y-3 '>
                    <p className='text-[#1A1919] font-semibold text-2xl space-y-4'>
                        <span className=' text-green-400 text-4xl'>One Step</span> Closer To Your
                        <br />
                        <span className='text-[#7E90FE] font-semibold'> Dream Job</span>
                    </p>
                    <p className=''>
                    Find all the job circulars available in Bangladesh and around the globe in one place. Post your resume or discover valuable career resources on Skill Jobs - the largest job site in Bangladesh.
                    </p>
                    <button className='bg-[#9873FF] rounded-md text-white text-sm py-2 px-3'>Get Started</button>
                </div>
                <div className='w-full'>
                    <img className='object-cover banner-img mt-6' src="./assets/All Images/banner-img.png" alt="" srcset="" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;