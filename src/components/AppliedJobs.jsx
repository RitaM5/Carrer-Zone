import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getStoredData } from '../utilities/fakeDb';
import AppliedData from './AppliedData';

const AppliedJobs = () => {
    const [mainAppliedData, setMainAppliedData] = useState([])
    const [appliedData, setAppliedData] = useState([])
    const [remote, setRemote] = useState([]);
    const [onsite, setOnsite] = useState([]);
    const location = useLocation();
    let backgroundImage = '';
    switch (location.pathname) {
        case '/appliedjobs':
            backgroundImage = 'url("./assets/All Images/Vector.png")';
            break;
    }
    const bannerStyle = {
        backgroundImage: backgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20% auto',
        backgroundPosition: 'left bottom',
    };
    const appliedJobs = getStoredData()
        useEffect(() => {
            fetch('/features.json')
                .then(res => res.json())
                .then(data => {
                    let newData = []
                    for (const id in appliedJobs) {
                        const foundData = data.find(Ap => Ap.id === id)
                        if (foundData) {
                            newData.push(foundData)
                        }
                    }
                    setAppliedData(newData)
                    setMainAppliedData(newData)
                })
        }, []);

    useEffect(() => {
        const remoteJobs = mainAppliedData.filter(jobs => jobs.job_type === 'Remote');
        setRemote(remoteJobs);
        const onsiteJobs = mainAppliedData.filter(jobs => jobs.job_type === 'Onsite');
        setOnsite(onsiteJobs);
    }, [appliedData]);

    const handleRemote = () => {
        setAppliedData(remote);
    }

    const handleOnsite = () => {
        setAppliedData(onsite);
    }
    return (
        <>
            <div style={bannerStyle} className='bg-gray-200 h-72'>
            </div>
            <div className='my-container mt-8 mb-20'>
                <h2 className='text-center mt-6 text-2xl font-semibold'><span className='text-green-600'>Applied</span> Jobs</h2>
                <hr className='w-72 my-3 border-green-600 mx-auto border-2' />
                <div className='flex justify-end mt-4'>
                    <div className="dropdown dropdown-bottom">
                        <label tabIndex={0} className="inline-flex gap-2 m-1 bg-green-300 px-6 py-3 rounded-md text-white font-bold">
                            Filter By
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-3 menu p-2 shadow bg-gray-200 rounded-box w-52">
                            <li onClick={handleRemote}><a className='font-bold'>Remote jobs</a></li>
                            <li onClick={handleOnsite}><a className='font-bold'>Onsite jobs</a></li>
                        </ul>
                    </div>
                </div>
                <div className='mt-8 grid grid-cols-1 gap-6 items-center'>
                    {
                        appliedData.map(info => <AppliedData info={info} key={info?.id} />)
                    }
                </div>
            </div>
        </>
    );
};
export default AppliedJobs;
