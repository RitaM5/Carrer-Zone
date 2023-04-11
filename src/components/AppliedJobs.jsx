import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getStoredData } from '../utilities/fakeDb';
import AppliedData from './AppliedData';
const AppliedJobs = () => {
    const [appliedData, setAppliedData] = useState([])
    const [detail, setDetail] = useState([])
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
    useEffect(() => {
        fetch('/features.json')
            .then(res => res.json())
            .then(data => setAppliedData(data))
    }, []);
    //get applied data
    const appliedJobs = getStoredData()
    let newData = []
    for (const id in appliedJobs) {
        const foundData = appliedData.find(Ap => Ap.id === id)
        newData.push(foundData)
    }
    return (
        <>
            <div style={bannerStyle} className='bg-gray-200 h-72'>
            </div>
            <div className='my-container mt-8'>
                <h2 className='text-center mt-8 text-2xl font-semibold'><span className='text-green-600'>Applied</span> Jobs</h2>
                <hr className='w-72 mt-3 border-green-600 mx-auto border-2' />
                <div className='mt-20 grid grid-cols-1 gap-6 items-center'>
                    {
                        newData.map(info =><AppliedData info={info} key={info?.id} />)
                    }
                </div>
            </div>
        </>
    );
};

export default AppliedJobs;