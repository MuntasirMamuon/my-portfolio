import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;