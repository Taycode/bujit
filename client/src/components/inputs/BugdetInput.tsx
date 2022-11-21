import React from 'react';

interface InputProps {
    type: string,
    name: string,
    value: string | number,
    placeholder: string,
    onChange : Function
}

function BudgetInput({
    type,
    name,
    value,
    placeholder,
    onChange
}: InputProps) {
    const [focused, setFocus] = React.useState<boolean>(false);

    return (
        <div className='flex w-full justify-between items-center'>
            <div
                className={`flex justify-between items-center w-full bg-ash-100 py-2 px-3 transition-all duration-500 rounded-t-md border-b-2 placeholder:text-ash-700 
        ${value || focused ? 'border-bujit-500' : 'border-transparent'}`}>

                <input placeholder={placeholder} className="focus:outline-none bg-transparent w-full"
                    onFocus={() => setFocus(true)} onBlur={e => {
                        // console.log(e.target)
                        if (type !== "password")
                            setFocus(false);
                    }} type={type} onChange={(e : any) => onChange(e.target)} value={value}/>
            </div>
        </div>
    )
}

export default BudgetInput;