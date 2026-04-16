import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const  {name, price, duration, description, features} = pricing;
    return (
        <div className='bg-blue-800 border rounded-2xl p-4 flex flex-col'>
            {/* Card Header */}
            <div>
                <h1 className="text-6xl">{name}</h1>
                <h4 className='text-3xl'>${price}</h4>
                <h5 className='text-2xl'>{duration}</h5>
            </div>
            {/* Card Body */}
            <div className='bg-blue-500 p-4 mt-10 rounded-2xl flex-1'>
                <p>{description}</p>
                {
                    features.map((feature,index) => <PricingFeature
                    key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className='btn w-full mt-4'>Subscribe</button>
        </div>
    );
};

export default PricingCard;