import React from 'react';

// assets import
import search from '../../assets/search.svg';

function SearchInput() {
    const [focused, setFocus] = React.useState<boolean>(false);

    return (
        <div
            className={`flex justify-between items-center w-72 h-fit py-1 px-2 transition-all duration-500 rounded-md border-2 placeholder:text-ash-700 
    ${focused ? 'bg-white border-secondary-500-500' : 'bg-ash-100 border-transparent'}`}>
            <img src={search} className="mr-2 h-5"/>
            <input className="focus:outline-none bg-transparent w-full placeholder:text-ash-700 " onFocus={() => setFocus(true)} onBlur={e => { setFocus(false); }} />
        </div>
    )
}

export default SearchInput;