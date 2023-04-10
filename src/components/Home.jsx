import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Category from './category';

const Home = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <>
            <Banner />
            <section className='my-container mt-6'>
                <p className='text-4xl font-bold-800 text-center'>Job Category List</p>
                <p className='text-center text-sm my-8'>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
                    {
                        categories.map(SingleData =>
                            <Category SingleData={SingleData} key={SingleData.id} />
                        )
                    }
                </div>
            </section>
            <section>
                <p className='text-4xl font-bold-800 text-center'>Featured Jobs</p>
                <p className='text-center text-sm my-8'>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
                <div>
                    
                </div>
            </section>
        </>
    );
};

export default Home;