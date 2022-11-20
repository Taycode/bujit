import React from 'react';
import { Link } from 'react-router-dom';

//component imports
import BudgetDropDown from '../components/bujit/BudgetDropDown';

// assets imports
import add from '../assets/add.svg';

function Budget() {
    return (
        <div className="py-5 pr-3">
            <div className='flex justify-between'>
                <h2 className="text-2xl text-gray-500 font-semibold ">Budgets</h2>
                <Link to="/budgets/create" className="h-fit w-fit text-white flex bg-bujit-500 p-3 rounded-lg">
                    <img src={add} className="mr-2"/>
                    Create Budget
                </Link>
            </div>

            <BudgetDropDown />
            <BudgetDropDown />
            <BudgetDropDown />
            <BudgetDropDown />
        </div>
    )
}

export default Budget;