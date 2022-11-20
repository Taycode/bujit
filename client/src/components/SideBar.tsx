import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// assets import
import calender from '../assets/calendar.svg';
import calender2 from '../assets/calendar2.svg';
import category from '../assets/category2.svg';
import category2 from '../assets/category.svg';
import chart from '../assets/chart.svg';
import chart2 from '../assets/chart2.svg';
import wallet from '../assets/wallet2.svg';
import wallet2 from '../assets/wallet.svg';
import logout from '../assets/logout.svg';

function SideBar() {
    const { pathname: path } = useLocation();

    const pathname = React.useMemo(
        () => {
            return path.split('/')[1]
        }, [path]
    )
    const sidebarlinks: Array<[string, string, string]> = [
        ['Dashboard', category, category2],
        ['Budgets', wallet, wallet2],
        ['Calender', calender, calender2],
        ['Reports', chart, chart2],
    ]
    return (
        <div className='w-44 h-full sidebar-shadow rounded-lg  px-5 py-5'>
            <div className='flex flex-col h-full max-h-[700px] relative'>
                {
                    sidebarlinks.map(([name, active, ghost]) => (
                        <Link to={"/" + name.toLowerCase()}
                            className={`flex items-center p-2 rounded-lg mb-3 transition-all duration-500 ${pathname === name.toLowerCase() ? 'bg-bujit-100 text-bujit-500' : 'hover:bg-bujit-100/50'}`}>
                            <img className='mr-4' src={pathname === name.toLowerCase() ? active : ghost} />{name}</Link>
                    ))
                }

                <button className='absolute bottom-0 flex items-center text-error-500'><img src={logout} className="mr-4" />Logout</button>
            </div>
        </div>
    )
}

export default SideBar;