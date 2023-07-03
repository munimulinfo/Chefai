import React from 'react';
import Header from '../../layouts/Header';
import { Outlet } from 'react-router-dom';
import Fotter from '../../layouts/Fotter';


const Home = () => {
    return (
        <div className='background'>
        <div className='my-container'>
                <Header></Header>
                <Outlet></Outlet>
                <Fotter></Fotter>
                </div>
        </div>
      
    );
};

export default Home;