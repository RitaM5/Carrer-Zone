import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation();
    let backgroundImage = '';
    switch (location.pathname) {
        case '/statistics':
            backgroundImage = 'url("./assets/All Images/Vector-1.png")';
            break;
        case '/appliedjobs':
            backgroundImage = 'url("./assets/All Images/Vector-1.png")';
            break;
        case '/blog':
            backgroundImage = 'url("./assets/All Images/Vector-1.png")';
            break;
    }
    const headerStyle = {
        backgroundImage: backgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top',
    };
    return (
        <header style={headerStyle} className='bg-gray-200'>
            <div className='my-container'>
                <div className='relative flex items-center justify-between'>
                    <Link
                        to='/'
                        aria-label='Carrer Zone'
                        title='Carrer Zone'
                        className='inline-flex items-center'
                    >
                        <span className='ml-2 inline-flex items-center text-2xl font-bold tracking-wide text-gray-800 '>
                        <img className='' src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/null/external-leaf-leaves-icongeek26-linear-colour-icongeek26-8.png"/>
                        <span className='text-green-600'>CAREER</span>ZONE
                        </span>
                    </Link>
                    <ul className='items-center hidden space-x-8 lg:flex'>
                        <li>
                            <NavLink
                                to='/'
                                aria-label='Home'
                                title='Home'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/statistics'
                                aria-label='Statistics'
                                title='Statistics'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Statistics
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to='/jobdetails'
                                aria-label='Job Details'
                                title='Job Details'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Details
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink to='/appliedjobs'
                                aria-label='Applied jobs'
                                title='Applied jobs'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Applied Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                aria-label='Blog'
                                title='Blog'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                    <button className='bg-[#7E90FE] py-2 px-4 md:hidden hidden lg:block text-white rounded-md'>
                        Star Applying
                    </button>
                    <div className='lg:hidden'>
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                <path
                                    fill='currentColor'
                                    d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                                />
                                <path
                                    fill='currentColor'
                                    d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className='absolute z-10 top-0 left-0 w-full'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link
                                                to='/'
                                                aria-label='Career Zone'
                                                title='Carrer Zone'
                                                className='inline-flex items-center'
                                            >
                                                <span className=' text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                    <span className='text-red-600'>Career</span>Zone
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                    <path
                                                        fill='currentColor'
                                                        d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav className=''>
                                        <ul className='space-y-4 text-left'>
                                        <li>
                                                <Link
                                                    to='/'
                                                    aria-label='Home'
                                                    title='Home'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/statistics'
                                                    aria-label='Statistics'
                                                    title='Statistics'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Statistics
                                                </Link>
                                            </li>
                                            {/* <li>
                                                <Link
                                                    to='/jobdetails'
                                                    aria-label='Job Details'
                                                    title='Job Details'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Details
                                                </Link>
                                            </li> */}
                                            <li>
                                                <Link
                                                    to='/appliedjobs'
                                                    aria-label='Applied Jobs'
                                                    title='Applied Jobs'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Applied Jobs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/blog'
                                                    aria-label='Blog'
                                                    title='Blog'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <button className='bg-[#7E90FE] py-2 px-4 text-white rounded-md'>
                                                    Star Applying
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;