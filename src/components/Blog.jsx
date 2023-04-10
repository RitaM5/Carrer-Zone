import React from 'react';
import { useLocation } from 'react-router-dom';

const Blog = () => {
    const location = useLocation();
    let backgroundImage = '';
    switch (location.pathname) {
        case '/blog':
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
            <h2>thi is blog</h2>
        </div>
    );
};

export default Blog;