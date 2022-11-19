import React from 'react';

// component imports
import BudgetInput from '../inputs/BugdetInput';
import CheckBox from '../inputs/CheckBox';

//asset imports
import trash from '../../assets/trash.svg';

function BudgetItem() {
    return (
        <div className='mb-7'>
            <h2 className='text-bujit-500 mb-2'>Budget Item 1</h2>
            <div className='grid grid-cols-5 gap-5'>
                <div className='col-span-2'>
                    <BudgetInput type='text' value="" placeholder='polasas' name='nnas' />
                </div>
                <div>
                    <BudgetInput type='text' value="" placeholder='polasas' name='nnas' />
                </div>
                <div>
                    <BudgetInput type='text' value="" placeholder='polasas' name='nnas' />
                </div>
                <div>
                    <BudgetInput type='text' value="" placeholder='polasas' name='nnas' />
                </div>
            </div>
            <div className='flex justify-between mt-2'>
                <div className='flex items-center'>
                    <CheckBox />
                    <h2 className='ml-2 text-[12px] text-ash-700'>Recurring Item</h2>
                </div>
                <button className='flex items-center text-[12px] text-error-500'><img src={trash} className="h-5 mr-2" /> Remove</button>
            </div>
        </div>
    )
}

export default BudgetItem;