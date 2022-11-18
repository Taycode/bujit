import React from 'react';

// assets import
import checkon from '../../assets/checkon.svg';
import checkoff from '../../assets/checkoff.svg';

interface CheckBoxProps {
    checked?: boolean,
    onClick?: Function
}


function CheckBox({ checked, onClick }: CheckBoxProps) {
    const [checker, setChecker] = React.useState<boolean>(checked || false);

    React.useEffect(
        () => {
            onClick && onClick(checker)
        }, [checker]
    )
    return (
        <img onClick={() => { setChecker(check => !check) }} className='h-5 cursor-pointer' src={checker ? checkon : checkoff} />

    )
}

export default CheckBox;