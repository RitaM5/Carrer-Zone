import React from 'react';
import { useLocation } from 'react-router-dom';
const AppliedJobs = () => {
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
    return (
        <div style={bannerStyle} className='bg-gray-200 h-44'>
            <h3>jjjjj</h3>
        </div>
    );
};

export default AppliedJobs;