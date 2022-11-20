import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

function BudgetTable() {

    const budgetHeads = [
        'Budget',
        'Budget Item',
        'Item type',
        'Previous Disbursement Amount',
        'Previous Disbursement Date',
    ]
    return (
        <ScrollMenu itemClassName='w-full' scrollContainerClassName='w-full'>
            <div className='grid grid-cols-5 gap-1 w-full min-w-max pb-4'>
                {/* First the headers */}
                {
                    budgetHeads.map(
                        category => {
                            return (
                                <div className='min-w-[195px]'>
                                    <h1 className='text-bujit-900 w-full bg-[#EDEDED] text-center text-[12px] font-semibold p-2'>{category}</h1>
                                    <div className='mt-1 border border-[#EDEDED] bg-secondary-500'>
                                        <h2 className='text-center border-b text-[12px] border-b-[#EDEDED] mb-1 p-2'> Shopping</h2>
                                        <h2 className='text-center border-b text-[12px] border-b-[#EDEDED] mb-1 p-2'> Shopping</h2>
                                        <h2 className='text-center border-b text-[12px] border-b-[#EDEDED] mb-1 p-2'> Shopping</h2>
                                        <h2 className='text-center border-b text-[12px] border-b-[#EDEDED] mb-1 p-2'> Shopping</h2>
                                        <h2 className='text-center border-b text-[12px] border-b-[#EDEDED] mb-1 p-2'> Shopping</h2>
                                        <h2 className='text-center border-b text-[12px] border-b-[#EDEDED] mb-1 p-2'> Shopping</h2>
                                    </div>
                                </div>
                            )
                        }
                    )
                }

            </div>

        </ScrollMenu>
    )
}
export default BudgetTable;