import React from 'react';
import { Loc } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Features = ({ feature}) => {
    const { id, category, picture, job_type, time, location, salary, company_name } = feature;
    return (
        <>
            <div className="card w-full h-full bg-base-100 shadow-2xl p-6">
                <img className='w-28 text-left ml-8' src={picture} alt="Shoes" />
                <div className="card-body text-left">
                    <h2 className="text-[#474747] font-semibold" style={{ fontSize: "20 px" }}>{category}</h2>
                    <p className='text-sm'>{company_name}</p>
                    <div className='flex gap-3 mt-2'>
                        <button className="btn btn-outline">{job_type}</button>
                        <button className="btn btn-outline btn-primary">{time}</button>
                    </div>
                    <div className='flex mt-2'>
                        <p className='inline-flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            {location}
                        </p>
                        <p className='inline-flex gap-2 mr-20'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {salary}
                        </p>
                    </div>
                    <Link to={`../features/${id}`}>
                        <p className='mt-3'>
                            <button className=" mt-auto py-3 rounded-md text-white bg-[#9873FF] px-8">View Details</button>
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Features;
//onClick={() => handleDetailsButton(id)}