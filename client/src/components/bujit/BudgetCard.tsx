import React from 'react';

// assets import
import { ReactComponent as Ring } from '../../assets/ring.svg';
import {ReactComponent as Cloud} from '../../assets/cloud.svg';

interface BudjetcCardProps {
    style: number
}
function BudgetCard({ style }: BudjetcCardProps) {
    return (
        <div className={`rounded-md card-shadow h-40 w-72 ${style === 0 ? 'bg-bujit-500' : style === 1 ? "bg-[#F9B81E]" : "bg-[#804000]"} relative overflow-hidden`}>
            {
                style === 0 ?
                    <div>
                        <Ring className='h-40 stroke-[#804000] opacity-10 absolute -top-28 -right-16 stroke-[20px]' />
                        <Ring className='h-40 stroke-[#804000] opacity-10 absolute -bottom-28  stroke-[20px]' />
                    </div> : style === 1 ?
                        <div>
                            <Cloud className='w-fit stroke-[#804000] opacity-10 absolute -top-2 right-0 stroke-[20px]' />
                            <Cloud className='h-40 stroke-[#804000] opacity-10 absolute -bottom-28  stroke-[20px]' />
                            <Cloud className='h-40 stroke-[#804000] opacity-10 absolute -bottom-28  stroke-[20px]' />
                        </div> :
                        <div>
                            <Ring className='h-40 stroke-[#804000] opacity-10 absolute -top-28 -right-16 stroke-[20px]' />
                            <Ring className='h-40 stroke-[#804000] opacity-10 absolute -bottom-28  stroke-[20px]' />
                        </div>
            }
        </div>
    )
}

export default BudgetCard;