import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getStoredData } from '../utilities/fakeDb';
import AppliedData from './AppliedData';
const AppliedJobs = () => {
    const [appliedData, setAppliedData] = useState([])
    const [appliedJobsValue, setAppliedJobsValue] = useState({})
    const [selectedValue, setSelectedValue] = useState("")
    const location = useLocation();
    let backgroundImage = '';
    switch (location.pathname) {
        case '/appliedjobs':
            backgroundImage = 'url("/public/assets/All Images/Vector.png")';
            break;
    }
    const bannerStyle = {
        backgroundImage: backgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20% auto',
        backgroundPosition: 'left bottom',
    };

    const appliedJobs = getStoredData()
    let newData = []
    useEffect(() => {
        fetch('/features.json')
            .then(res => res.json())
            .then(data =>{
                for (const id in appliedJobs) {
                            const foundData = data.find(Ap => Ap.id === id)
                            if(foundData){
                               newData.push(foundData)
                            }
                        }
                        setAppliedData(newData)
            })
    }, []);
    // const showRemoteJob =()=>{
    //     const foundData = appliedData.filter(Ap => Ap.job_type === "Remote")
    //     if(foundData){
    //        newData.push(foundData)
    //     }
    //     setAppliedData(newData)
    // }
    return (
        <>
            <div style={bannerStyle} className='bg-gray-200 h-72'>
            </div>
            <div className='my-container mt-8'>
                <h2 className='text-center mt-8 text-2xl font-semibold'><span className='text-green-600'>Applied</span> Jobs</h2>
                <hr className='w-72 mt-3 border-green-600 mx-auto border-2' />
                <div className='flex justify-end'>
                    <div className="dropdown dropdown-hover mt-20">
                        <label tabIndex={0} className=" bg-green-300 py-3 text-white rounded-md px-8 m-1 font-bold inline-flex gap-2">
                            Filter By
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className=" mt-2 dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52">
                            <li ><a>Remote jobs</a></li>
                            <li ><a>Onsite jobs</a></li>
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
