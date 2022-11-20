import React from 'react';

// assets import
import { ReactComponent as Ring } from '../../assets/ring.svg';
import { ReactComponent as Cloud } from '../../assets/cloud.svg';
import cloud from '../../assets/cloud.svg';

interface BudjetcCardProps {
    style: number
}
function BudgetCard({ style }: BudjetcCardProps) {
    return (
        <div className={`rounded-md card-shadow flex justify-between flex-col text-white h-44 mr-5 my-5 w-80 p-3 ${style === 0 ? 'bg-bujit-500' : style === 1 ? "bg-[#F9B81E]" : "bg-[#804000]"} relative overflow-hidden`}>
            {
                style === 0 ?
                    <div className='w-full h-full absolute'>
                        <Ring className='h-40 stroke-[#804000] opacity-10 absolute -top-28 -right-16 stroke-[20px]' />
                        <Ring className='h-40 stroke-[#804000] opacity-10 absolute -bottom-28  stroke-[20px]' />
                    </div> : style === 1 ?
                        <div className='w-full h-full absolute'>
                            <img src={cloud} className="h-20 absolute -top-2 right-0 opacity-10" />
                            <img src={cloud} className="h-10 absolute top-10 -left-2 opacity-10" />
                            <img src={cloud} className="h-14 absolute bottom-0 right-20 opacity-10" />
                        </div> :
                        <div className='w-full h-full absolute'>
                            <Ring className='h-40 stroke-[#FFDCB3] opacity-10 absolute -top-20 -right-20 stroke-[20px]' />
                            <Ring className='h-40 stroke-[#FFDCB3] opacity-10 absolute -top-20 -left-20 stroke-[20px]' />
                            <Ring className='h-40 stroke-[#FFDCB3] opacity-10 absolute -bottom-28 right-0 stroke-[20px]' />
                        </div>
            }
            <div>
                <h2>October Budget</h2>
                <h2 className='text-sm mt-1'>Balance</h2>
                <h2 className='text-3xl font-semibold'>&#8358;14,000</h2>
            </div>
            <div>
                <h2 className='text-sm'>New Disbursement of <span className={`font-semibold ${[0,1].includes(style) ? 'text-[#804B0E]' : 'text-bujit-500'}`}>&#8358;34,000</span> on <span className={`font-semibold ${[0,1].includes(style) ? 'text-[#804B0E]' : 'text-bujit-500'}`}>12/12/2001</span></h2>
                <h2 className='text-sm'>Created <span className={`font-semibold ${[0,1].includes(style) ? 'text-[#804B0E]' : 'text-bujit-500'}`}>10/11/2001</span></h2>
            </div>
        </div>
    )
}

export default BudgetCard;