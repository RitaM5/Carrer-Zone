import React from 'react';
const AppliedData = ({ info }) => {
    return (
        <>
            <div className="card w-full h-full bg-base-100 shadow-2xl p-4">
                <div className='lg:flex lg:justify-between lg:items-center sm:col-auto'>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                        <div className='w-52 ml-8 mt-2 h-52 flex justify-center items-center rounded-md bg-[#F4F4F4]'>
                            <img className='w-28 text-left ml-4' src={info?.picture} alt="Shoes" />
                        </div>
                        <div className="card-body text-left">
                            <h2 className="text-[#474747] font-semibold" style={{ fontSize: "36 px" }}>{info?.category}</h2>
                            <p className='text-bold-600' style={{ fontSize: "24 px" }}>{info?.company_name}</p>
                            <span className='flex gap-3 mt-2'>
                                <button className="py-2 px-3 text-white rounded-md btn-error">{info?.job_type}</button>
                                <button className="py-1 px-3 rounded-md btn-primary">{info?.time}</button>
                            </span>
                            <span className='flex gap-6 mt-3'>
                                <p className='inline-flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    {info?.location}
                                </p>
                                <p className='inline-flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {info?.salary}
                                </p>
                            </span>
                        </div>
                    </div>
                    <button className="btn btn-success px-6 text-white ml-6 lg:ml-0">View Details</button>
                </div>
            </div>
        </>
    );
};

export default AppliedData;