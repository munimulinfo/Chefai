import React from 'react';
import banner from '../assets/banner.png'
import pizza from '../assets/pizza.png'
import Lottie, { useLottie } from "lottie-react";
import happyCus from '../assets/happy-user.json'
import chef from '../assets/chef.json'

const Hero = () => {

    return (
        <>
            <div className="hero">
                <div className="grid lg:grid-cols-2 gap-2 items-center p-5 grid-cols-1">
                    <div className="col-span-4">
                        <h2 className='text-7xl font-bold'>Make Your Dream <span className='text-red-600'>Food With Our</span> Chef</h2>
                    </div>
                    <div className="col-span-8 flex gap-2">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 items-center p-5 ">
                <div className="review lg:col-span-4">
                    <h3 className='text-lg font-bold'>5k+ Review</h3>
                    <h4 className='text-gray-600'>200+ Comments</h4>
                </div>
                <div className="customer lg:col-span-4 flex items-center">
                    <div className="lottie">
                         <Lottie animationData={happyCus} loop={true} className='h-56' />;
                   </div>
                    <div className="text-area">
                        <h3 className='text-lg font-bold'>500+ Happy Customer</h3>
                        <h4 className='text-gray-600'>4.8 Rating (5000+ Review) </h4>
                    </div>
                </div>
                <div className="best-food lg:col-span-5 flex items-center">
                    <div className="lottie">
                        <Lottie animationData={chef} loop={true} className='h-72' />;
                    </div>
                     <div className="text-area">
                        <h3 className='text-lg font-bold'>Best Specialist Chef</h3>
                        <h4 className='text-gray-600'>We Have Best Chef of Your Area</h4>
                    </div>
                </div>
            </div>
            <h2 className='mt-5 mb-5 text-3xl text-center font-bold'>Explore Our <span className='text-red-600'>Chef</span></h2>
        </>
    );
};

export default Hero;