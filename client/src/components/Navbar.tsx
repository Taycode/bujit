import React from 'react';

// components import
import SearchInput from './inputs/SearchInput';

// assets import
import logo from '../assets/logo.svg';
import profile from '../assets/profile.png';

function Navbar({user} : {user : any}) {
    return (
        <nav className='flex justify-between items-center h-24'>
            <div className='flex items-center'>   
                <h2 className='flex items-center text-bujit-500 text-[21px] w-44 justify-center'><img src={logo} className="h-14"/>Bulga</h2>
                <h2 className='text-[19px] pl-10'>Hello {user?.firstName}</h2>
            </div>

            <div className='flex items-center'>
                <SearchInput />

                {/* Profile image */}
                <img className='w-10 h-10 border rounded-full border-bujit-500 ml-12' src={profile}/>
            </div>
        </nav>
    )
}

export default Navbar;
