import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ScrollArea from 'react-scrollbar';

// component imports
import Navbar from './Navbar';
import SideBar from './SideBar';
import Dashboard from '../pages/Dashboard';
import Budget from '../pages/Budget';

function Layout() {
    return (
        <div className='container mx-auto px-10'>
            <Navbar />
            <div className='h-[calc(100vh-96px)] pb-10 flex'>
                <SideBar />

                {/* The core application */}
                <main className='w-[calc(100%-176px)] pl-10'>
                    <ScrollArea 
                    className='h-full'>
                        <Routes>
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/budgets' element={<Budget />} />
                        </Routes>
                    </ScrollArea>
                </main>
            </div>
        </div>
    )
}

export default Layout;