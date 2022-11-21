import React from 'react';

import arrow from '../../assets/arrow-down.svg';

function BudgetDropDown({title, budgets} : any) {
    const [open, setOpen] = React.useState<boolean>(false)
    return (
        <div className='w-full max-w-2xl mb-1 transition-all duration-500 overflow-hidden p-2' style={{
            height : !open ? '63px'  : ((65 + (budgets?.length || 0) *48).toString() + 'px')
        }}>
            <button className='dropdown-shadow bg-secondary-500 rounded-lg py-3 h-12 px-5 w-full flex justify-between' onClick={() => setOpen(open => !open)}>
                <h2>{title} Budget(s)</h2>
                <h2 className='flex text-bujit-500'>{(budgets?.length || 0)} <img src={arrow} className={`ml-5 transition-all duration-500 ${open ? 'rotate-180' : ''}`}/></h2>
            </button>

            <div className='bg-[#EDEDED] flex flex-col rounded-b-lg overflow-hidden mt-2'>
                {
                    budgets?.map( (budget : any) => {
                        return <h2 className='h-12 text-bujit-900 py-3 px-5 border-b border-secondary-700'>{budget.name}</h2>

                    }
                    )
                }
                {/* <h2 className='h-12 text-bujit-900 py-3 px-5 border-b border-secondary-700'>October</h2>
                <h2 className='h-12 text-bujit-900 py-3 px-5 border-b border-secondary-700'>October</h2> */}
            </div>
        </div>
    )
}

export default BudgetDropDown;