import React from 'react';
import { useLocation } from 'react-router-dom';
const Blog = () => {
    const location = useLocation();
    let backgroundImage = '';
    switch (location.pathname) {
        case '/blog':
            backgroundImage = 'url("./assets/All Images/Vector.png")';
            break;
    }
    const bannerStyle = {
        backgroundImage: backgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20% auto',
        backgroundPosition: 'left bottom',
    };
    // const container = useRef(null)
    // useEffect(() => {
    //     lottie.loadAnimation({
    //         container: container.current,
    //         renderer: 'svg',
    //         loop: true,
    //         autoplay: true,
    //         animationData: require('./ring.json')
    //     })
    // }, [])
    return (
        <>
            <div style={bannerStyle} className='bg-gray-200 h-72'>
            </div>
            <h1 className='text-center pt-4 my-6 text-4xl font-semibold'><span className=' text-blue-800'>Qustion</span> Mark</h1>
            <div className='my-container my-14 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-16'>
                <div className='space-y-6'>
                    <div tabIndex={0} className="h-36 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className=" collapse-title text-xl font-medium">
                            When should we use Context API ?
                        </div>
                        <div className="collapse-content">
                            <p className=''>Context API is used to share data between components without props drilling,where you have a lot of props drilling, need to pass data down through many levels of the component tree & give improve perforformance.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="h-36 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className=" collapse-title text-xl font-medium">
                            What is custom hook ?
                        </div>
                        <div className="collapse-content mb-3">
                            <p className='mb-3'>Custom hook is a JavaScript function.Custom hooks allow to reuse stateful logic between components without duplicating code. like useState, useEffect.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="h-36 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="mt-2 collapse-title text-xl font-medium">
                            What is useRef ?
                        </div>
                        <div className="collapse-content">
                            <p>useRef is a built-in hook in React that returns a mutable object, whose current property is initialized to a provided value. </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="h-36 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="mt-2 collapse-title text-xl font-medium">
                            What is useMemo ?
                        </div>
                        <div className="collapse-content">
                            <p>useMemo is a built-in hook in React that allow to memoize a function's return value.It can specify a function and a list of dependencies.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='mt-3' src="./assets/All Images/faq.png" alt="" srcset="" />
                </div>
            </div>
        </>
    );
};

export default Blog;