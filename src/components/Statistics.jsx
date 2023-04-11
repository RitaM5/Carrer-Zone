import React from 'react';
import { useLocation } from 'react-router-dom';
import { PureComponent } from 'react';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
const Statistics = () => {
    const location = useLocation();
    let backgroundImage = '';
    switch (location.pathname) {
        case '/statistics':
            backgroundImage = 'url("/public/assets/All Images/Vector.png")';
            break;
    }
    const bannerStyle = {
        backgroundImage: backgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20% auto',
        backgroundPosition: 'left bottom',
    };
    const data = [
        {
            name: 'Assignment-1',
            marks: 60
        },
        {
            name: 'Assignment-2',
            marks: 60
        },
        {
            name: 'Assignment-3',
            marks:60
        },
        {
            name: 'Assignment-4',
            marks:60
        },
        {
            name: 'Assignment-5',
            marks:50
        },
        {
            name: 'Assignment-6',
           marks:59
        },
        {
            name: 'Assignment-7',
            marks:60
        },
        {
            name: 'Assignment-8',
            marks:60
        },
    ];
    return (
        <>
            <div style={bannerStyle} className='bg-gray-200 h-72'>
            </div>
            <div className='my-container mt-8'>
                <p className='text-center my-3 text-4xl font-semibold'>Assignment <span className='text-red-700'>Marks</span></p>
                <hr/>
                <div className='mt-12' style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <ComposedChart
                            width={500}
                            height={600}
                            data={data}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="marks" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="marks" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default Statistics;