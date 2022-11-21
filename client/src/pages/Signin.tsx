import React from 'react';
import { useNavigate } from 'react-router';

// components import
import WaveBackground from '../components/WaveBackgound';
import Input from '../components/inputs/Input';
import CheckBox from '../components/inputs/CheckBox';

// utils import
import { postRequest } from '../utils/api';

//assets import
import apple from '../assets/apple.svg';
import google from '../assets/google.svg';
import Loader from '../components/Loader';
import abstractart from '../assets/abstractart.png';

interface signinDataProps {
    email: null | {
        message : string,
        good : boolean
    },
    password: null | {
        message : string,
        good : boolean
    }
}

function Signin() {
    const [loading, setLoading] = React.useState<boolean>(false);



    const navigate = useNavigate();

    const [signinData, setSiginpData] = React.useState({
        email: '',
        password: ''
    })

    const [errorData, setErrors] = React.useState<signinDataProps>({
        email: null,
        password: null
    })

    function updateData(field: string, value: any) {
        if (value === '')
            setErrors({...errorData, [field] : null})
        else {
            if (!value) {
                setErrors({...errorData, [field] : {message : 'Field cannot be empty', good : false}})
            } else {
                setErrors({...errorData, [field] : {message : '', good : true}})
            }
        }
        setSiginpData({
            ...signinData,
            [field]: value
        })
    }

    const thereIsError = React.useMemo(
        () => {
            return !signinData.email || !signinData.password || Object.values(errorData).filter(value => value === null).length !== 0
        }, [errorData]
    )

    async function handleFormSubmit(e : any) {
        e.preventDefault();
        setLoading(true)
        const response = await postRequest('user/login', signinData);
        setLoading(false)
        console.log(response)

        if (response.status === 200) {
            localStorage.setItem('token', response.data.data.token)
            navigate('/dashboard');
        } else if (response.status === 401) {
            setErrors({
                email: {
                    message : 'Details Incorrect',
                    good : false
                },
                password: {
                    message : 'Details Incorrect',
                    good : false
                }
            })
        }
    }


    return (
        <WaveBackground>
            <img src={abstractart} className="fixed top-0 right-0 -z-10"/>
            <form onSubmit={handleFormSubmit} className='w-full max-w-2xl overflow-hidden h-fit all-shadow bg-white rounded-md relative py-10 px-4 md:px-16 flex justify-center items-center flex-col'>
                {
                    loading ?
                        <div className='absolute w-full h-full z-10 bg-secondary-500/90 flex flex-col justify-center items-center'>
                            <Loader className='h-12 mb-2' />
                            <h2 className='text-bujit-500 text-center text-xl font-semibold'>Signing you in...</h2>
                        </div> : <></>
                }
                <h2 className='text-bujit-500 text-2xl'>Sign In</h2>

                <div className='w-full flex justify-center md:justify-between mt-7'>
                    <button className='rounded-full md:rounded-lg border border-bujit-500 p-2 text-sm w-8 h-8 items-center mr-4 md:m-0 md:h-fit md:w-[48%] flex justify-center'>
                        <h2 className='flex items-center'><img className='h-5 mr-4' src={apple} /> <span className='hidden md:block'>Sign in With Apple</span></h2>
                    </button>
                    <button className='rounded-full md:rounded-lg border border-bujit-500 p-2 text-sm w-8 h-8 items-center md:h-fit md:w-[48%] flex justify-center'>
                        <h2 className='flex items-center'><img className='h-5 mr-4' src={google} /><span className='hidden md:block'> Sign in With Google</span></h2>
                    </button>
                </div>

                <div className='flex justify-center relative w-full my-7'>
                    <h2 className='text-ash-500 absolute bg-white p-2 text-sm -top-5'>or</h2>
                    <hr className='w-full' />
                </div>

                <Input name='email' value={signinData.email} status={errorData.email} type='email' placeholder='Email Address' onChange={(e: any) => updateData(e?.name, e?.value)} />
                <Input name='password' value={signinData.password} status={errorData.password} type='password' placeholder='Password' onChange={(e: any) => updateData(e?.name, e?.value)} />

                <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center'>
                        <CheckBox />
                        <h2 className='ml-1 text-[12px]'>Remember password</h2>
                    </div>

                    <a className='text-bujit-500 text-[12px] pb-[1px] cursor-pointer border-b border-b-bujit-500'>Reset password</a>
                </div>


                <button disabled={thereIsError} className={`mt-16 ${!thereIsError ? 'bg-bujit-500' : 'bg-bujit-500/70'} rounded-md text-white w-full p-3`}>
                    Sign In
                </button>
            </form>
        </WaveBackground>
    )
}

export default Signin;