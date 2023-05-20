import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
const Layout = () => {
    return (
        <div className='flex gap-1 h-screen'>
            <Sidebar/>
            <div className='childContainer flex-[18]'>
                <Outlet className="child" />
            </div>
        </div>
    );
};

export default Layout;