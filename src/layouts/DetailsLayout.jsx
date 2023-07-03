import React from 'react';
import Header from './Header';
import Fotter from './Fotter';
import { Outlet } from 'react-router-dom';

const DetailsLayout = () => {
    return (
         <div className='my-container'>
            <Header></Header>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default DetailsLayout;