import React from 'react';

import loader from '../../assets/loader.svg';

interface LoaderProps {
    className? : string
}
function Loader({className} : LoaderProps) {
    return (
        <img src={loader} className={(className || '' ) + ' animate-spin'}/>
    )
}

export default Loader;