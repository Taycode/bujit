import React from 'react';

// components import
import WaveBackground from '../components/WaveBackgound';
import Input from '../components/inputs/Input';
import CheckBox from '../components/inputs/CheckBox';

//assets import
import apple from '../assets/apple.svg';
import google from '../assets/google.svg';
import Loader from '../components/Loader';
import abstractart from '../assets/Patterns.png';

function Signup() {
    const [loading, setLoading] = React.useState<boolean>(true);
    return (
        <WaveBackground>
            <img src={abstractart} className="fixed top-0 left-0 -z-10" />
            <form className='w-full max-w-2xl overflow-hidden h-fit all-shadow bg-white rounded-md relative py-10 px-4 md:px-16 flex justify-center items-center flex-col'>
                {
                    loading ?
                        <div className='absolute w-full h-full z-10 bg-secondary-500/90 flex flex-col justify-center items-center'>
                            <Loader className='h-12 mb-2' />
                            <h2 className='text-bujit-500 text-center text-xl font-semibold'>Signing you up...</h2>
                        </div> : <></>
                }
                <h2 className='text-bujit-500 text-2xl'>Sign Up</h2>

                <div className='w-full flex justify-center md:justify-between mt-7'>
                    <button className='rounded-full md:rounded-lg  border border-bujit-500 p-2 text-sm w-8 h-8 items-center mr-4 md:m-0 md:h-fit md:w-[48%] flex justify-center'>
                        <h2 className='flex items-center'><img className='h-5 mr-4' src={apple} /> <span className='hidden md:block'>Sign in With Apple</span></h2>
                    </button>
                    <button className='rounded-full md:rounded-lg  border border-bujit-500 p-2 text-sm w-8 h-8 items-center md:h-fit md:w-[48%] flex justify-center'>
                        <h2 className='flex items-center'><img className='h-5 mr-4' src={google} /><span className='hidden md:block'> Sign in With Google</span></h2>
                    </button>
                </div>

                <div className='flex justify-center relative w-full my-7'>
                    <h2 className='text-ash-500 absolute bg-white p-2 text-sm -top-5'>or</h2>
                    <hr className='w-full' />
                </div>

                <Input name='email' value="" status={null} type='text' placeholder='Full Name' />
                <Input name='email' value="" status={null} type='text' placeholder='Email Address' />
                <Input name='email' value="" status={{
                    message: 'Incorrect Password',
                    good: false
                }} type='password' placeholder='Password' />

                {/* <div className='flex justify-between items-center w-full'>
                    <div className='flex items-center'>
                        <CheckBox />
                        <h2 className='ml-1 text-[12px]'>Remember password</h2>
                    </div>

                    <a className='text-bujit-500 text-[12px] pb-[1px] cursor-pointer border-b border-b-bujit-500'>Reset password</a>
                </div> */}


                <button className='mt-16 bg-bujit-500 rounded-md text-white w-full p-3'>
                    Sign In
                </button>
            </form>
        </WaveBackground>
    )

}

export default Signup;