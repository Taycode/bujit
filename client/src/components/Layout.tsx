import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import {Scrollbars} from 'react-custom-scrollbars';

// utils import
import { getRequest } from '../utils/api';

// component imports
import Navbar from './Navbar';
import SideBar from './SideBar';
import Dashboard from '../pages/Dashboard';
import Budget from '../pages/Budget';
import BudgetCreate from '../pages/BudgetCreate';

function Layout() {
    const [user, setUser] = React.useState(null)
    const navigate = useNavigate();

    async function getUserData () {
        const response = await getRequest('user/fetch');
        console.log(response)
        if (response.status === 200) {
            setUser(response.data.data)
        } else {
            navigate('/signin')
        }
    }
    React.useEffect(
        () => {
            getUserData();
        }, []
    )
    return (
        <div className='container mx-auto px-10'>
            <Navbar user={user}/>
            <div className='h-[calc(100vh-96px)] pb-10 flex'>
                <SideBar />

                {/* The core application */}
                <main className='w-[calc(100%-176px)] pl-10'>
                    <Scrollbars
                    className='h-full' autoHide>
                        <Routes>
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/budgets' element={<Budget />} />
                            <Route path='/budgets/create' element={<BudgetCreate user={user}/>} />
                        </Routes>
                    </Scrollbars>
                </main>
            </div>
        </div>
    )
}

export default Layout;