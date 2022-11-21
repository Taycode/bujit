import React from 'react';

// assets import 
import good from '../../assets/good.svg';
import bad from '../../assets/bad.svg';
import show from '../../assets/passhide.svg';
import hide from '../../assets/passshow.svg';

interface InputProps {
    type: string,
    name: string,
    value: string | number,
    status: {
        good: boolean,
        message?: string
    } | null,
    placeholder: string,
    onChange? : Function
}

function Input({
    type,
    name,
    value,
    status,
    placeholder,
    onChange
}: InputProps) {
    const [focused, setFocus] = React.useState<boolean>(false);
    const [inputType, setType] = React.useState<string>(type);

    // console.log(value, '=> inside inout')
    return (
        <div className='w-full pb-4'>
            <div className='flex w-full justify-between items-center'>
                <div
                    className={`flex justify-between items-center w-[calc(100%-30px)] py-2 px-3 transition-all duration-500 rounded-md border placeholder:text-ash-700 
                ${status && !status?.good && (value || focused) ? 'border-error-500' : value || focused ? 'bg-white border-bujit-500' : 'bg-ash-100 border-transparent'}`}>

                    <input placeholder={placeholder} className="focus:outline-none bg-transparent w-full"
                        onFocus={() => setFocus(true)} onBlur={e => {
                            // console.log(e.target)
                            if (type !== "password")
                                setFocus(false);
                        }} type={inputType} name={name} value={value} onChange={e => onChange && onChange(e.target)} />

                    {
                        (value || focused) && type === "password" ?
                            <img className="w-6 cursor-pointer" src={inputType === 'text' ? hide : show} onClick={
                                () => {
                                    setFocus(true);
                                    setType(inputType !== 'text' ? 'text' : 'password')
                                }
                            } /> : <></>
                    }
                </div>

                {
                    status ?
                        <img src={status?.good ? good : bad} className='w-4' />
                        : <></>
                }
            </div>

            <h2 className={`text-[12px] font-semibold text-error-500 ${status?.message ? 'visible' : 'invisible'}`}>{status?.message || 'asdas'}</h2>

        </div>
    )
}

export default Input;

/***
 * A fix to a possible bug
 * ${type === "password" ? 'w-[calc(100% - 24px)]' : 'w-full'}
 */