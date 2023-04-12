import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-gray-700'>
            <div className='my-container grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-x-28 gap-y-4 items-center justify-center text-white'>
                <div className='w-full h-full'>
                    <p className='text-xl font-semibold text-green-500'>CARRER-ZONE</p>
                    <p className='mt-2 w-full'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos provident, accusamus ipsa fugit recusandae
                    </p>
                    <img className='mt-3' src="../../public/assets/Icons/Group 9969.png" alt="" srcset="" />
                </div>
                <div className='w-full h-full'>
                    <p className='text-xl font-semibold'>Company</p>
                    <ul className='mt-2'>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='w-full h-full'>
                    <p className='text-xl font-semibold'>Product</p>
                    <ul className='mt-2'>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className='w-full h-full'>
                    <p className='text-xl font-semibold'>Support</p>
                    <ul className='mt-2'>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div className='w-full h-full'>
                    <p className='text-xl font-semibold'>Contact</p>
                    <ul className='mt-2'>
                        <li>524 Broadway , NYC</li>
                        <li>+1 777 - 978 - 5570</li>
                    </ul>
                </div>
            </div>
            <hr className='mt-4 border-white my-container' />
            <div className='flex justify-between sm:col-auto text-white my-container'>
                <p className='mb-4'>@2023 CareerZone. All Rights Reserved</p>
                <p className='mb-4'>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;