import React from 'react';

// component imports
import BudgetInput from '../inputs/BugdetInput';
import CheckBox from '../inputs/CheckBox';

//asset imports
import trash from '../../assets/trash.svg';

function BudgetItem({
    index,
    onChange,
    remove,
    data
} : any) {

    const [itemState, setItemState] = React.useState(data);
    
    const {name, type, amount, date, interval} = itemState;

    React.useEffect(
        () => {
            // console.log('updating items')
            console.log(itemState)
            onChange(itemState, index)
        }, [itemState]
    )


    function updateItem(field : string, value : string) {
        setItemState({
            ...itemState,
            [field] : value
        })
    }
    return (
        <div className='mb-7'>
            <h2 className='text-bujit-500 mb-2'>Budget Item {index + 1}</h2>
            <div className='grid lg:grid-cols-5 gap-5'>
                <div className='lg:col-span-2'>
                    <BudgetInput type='text' value={name} placeholder='Item title' name='nnas' onChange={(e : any) => updateItem('name', e.value)} />
                </div>
                <div>
                    <BudgetInput type='number' value={amount} placeholder='Amount' name='nnas'  onChange={(e : any) => updateItem('amount', e.value)}/>
                </div>
                <div>
                    <BudgetInput type='text' value={interval} placeholder='Intervals' name='nnas'  onChange={(e : any) => updateItem('interval', e.value)}/>
                </div>
                <div>
                    <BudgetInput type='date' value={date} placeholder='Date' name='nnas' onChange={(e : any) => updateItem('date', e.value)} />
                </div>
            </div>
            <div className='flex justify-between mt-2'>
                <div className='flex items-center'>
                    <CheckBox checked={type === 'Recurring'} onClick={(e : any) =>{
                        updateItem('type', e ? 'recurring' : 'non_recurring')
                    }
                    }/>
                    <h2 className='ml-2 text-[12px] text-ash-700'>Recurring Item</h2>
                </div>
                <button className='flex items-center text-[12px] text-error-500' onClick={() => remove(index)}><img src={trash} className="h-5 mr-2" /> Remove</button>
            </div>
        </div>
    )
}

export default BudgetItem;