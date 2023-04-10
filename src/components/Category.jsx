import React from 'react';

const Category = ({ SingleData }) => {
    console.log(SingleData);
    const {id, title, img, description} = SingleData;
    return (
        <>
        <div className="card w-full h-full bg-base-100 shadow-2xl p-6">
          <img className='w-16 text-left ml-4' src={img} alt="Shoes" />
            <div className="card-body text-left">
                <h2 className="text-[#474747] font-bold-800" style={{fontSize:"20 px"}}>{title}</h2>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
        </>
    );
};

export default Category;