import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Category from './category';
import { useLoaderData } from 'react-router-dom';
import Features from './Features';

const Home = () => {
    const [categories, setCategories] = useState([])
    const [features, setFeatures] = useState([])
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(true);
    };
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);
    useEffect(() => {
        fetch('/features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, []);
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
            <section className='mt-16 my-container'>
                <p className='text-4xl font-bold-800 text-center'>Featured Jobs</p>
                <p className='text-center text-sm my-8'>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-16'>
                    {
                        features.slice(0, showAll ? 6 : 4).map(feature =>
                        <Features 
                        feature={feature} 
                        key={feature.id}
                        /> )
                    }
                </div>
                {!showAll && (
                    <span className='flex justify-center' onClick={handleShowAll}>
                        <button className='btn btn-error my-10 px-5 text-white'>See All Jobs</button>
                    </span>
                )}
            </section>
        </>
    );
};

export default Home;