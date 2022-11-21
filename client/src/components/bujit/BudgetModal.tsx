import React from 'react';

// component import
import Modal from '../Modal';

//assets imports
import close from '../../assets/close.svg';
import add from '../../assets/add2.svg';
import failed from '../../assets/failed.svg';
import success from '../../assets/success.svg';
import { Link } from 'react-router-dom';

type State = 'initial' | 'account' | 'done'

function BudgetModal({ show, toggle, set, accounts, showAdd, successState }: any) {
    const state = React.useMemo<State>(() => successState ? 'done' :  'account', [successState]);

    return (
        <Modal show={show} toggle={() => toggle()}>
            <div className='w-full max-w-2xl h-fit rounded-lg bg-white p-6'>

                {
                    state !== 'done' ?
                        <div className='flex items-center justify-between'>
                            <h1 className='text-2xl text-bujit-500'>Budget Summary</h1>
                            <button onClick={toggle}>
                                <img src={close} />
                            </button>
                        </div> : <></>
                }

                {
                    state === 'initial' ?
                        <div>
                            <div className='flex mt-7'>
                                <div className='mb-4 mr-20'>
                                    <h2 className='text-[12px] text-ash-800'>Budget Name</h2>
                                    <h2 className='text-bujit-500 font-semibold'>November Budget</h2>
                                </div>

                                <div className='mb-4'>
                                    <h2 className='text-[12px] text-ash-800'>Budget Period</h2>
                                    <h2><span className='text-bujit-500 font-semibold'>11-10-2010</span> to <span className='text-bujit-500 font-semibold'>21-12-2020</span></h2>
                                </div>
                            </div>

                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className='text-[16px] text-start font-semibold text-bujit-800 p-3'>Budget Item</th>
                                        <th className='text-[16px] text-start font-semibold text-bujit-800 p-3'>Item Type</th>
                                        <th className='text-[16px] text-start font-semibold text-bujit-800 p-3'>Interval</th>
                                        <th className='text-[16px] text-start font-semibold text-bujit-800 p-3'>Date</th>
                                        <th className='text-[16px] text-start font-semibold text-bujit-800 p-3'>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='text-sm w-14 p-3'>1.</td>
                                        <td className='text-sm p-3'>Plastic Bags</td>
                                        <td className='text-sm p-3'>Recurring</td>
                                        <td className='text-sm p-3'>1 week</td>
                                        <td className='text-sm p-3'>11-21-2020</td>
                                        <td className='text-sm p-3'>11,000</td>
                                    </tr>
                                    <tr>
                                        <td className='text-sm w-14 p-3'>1.</td>
                                        <td className='text-sm p-3'>Plastic Bags</td>
                                        <td className='text-sm p-3'>Recurring</td>
                                        <td className='text-sm p-3'>1 week</td>
                                        <td className='text-sm p-3'>11-21-2020</td>
                                        <td className='text-sm p-3'>11,000</td>
                                    </tr>
                                    <tr>
                                        <td className='text-sm w-14 p-3'>1.</td>
                                        <td className='text-sm p-3'>Plastic Bags</td>
                                        <td className='text-sm p-3'>Recurring</td>
                                        <td className='text-sm p-3'>1 week</td>
                                        <td className='text-sm p-3'>11-21-2020</td>
                                        <td className='text-sm p-3'>11,000</td>
                                    </tr>
                                </tbody>
                            </table>

                            <hr className='my-6' />

                            <div className='flex justify-center items-center'>
                                <h3 className='text-sm text-ash-700 mr-4'>Budget Total</h3>
                                <h3 className='text-2xl font-semibold text-bujit-500'>&#8358;60,000</h3>
                            </div>

                            <div className='flex justify-center'>
                                <button className="h-fit w-full max-w-lg text-center text-white mt-9 bg-bujit-500 p-2 rounded-lg">
                                    Proceed With Payment
                                </button>
                            </div>

                        </div> : state === 'account' ?
                            <div>

                                <div className='flex mt-7'>
                                    <div className='mb-4 mr-20'>
                                        <h2 className='text-[12px] text-ash-800'>Budget Amount</h2>
                                        <h2 className='text-bujit-500 font-semibold'>&#8358;12,000</h2>
                                    </div>

                                    <div className='mb-4'>
                                        <h2 className='text-[12px] text-ash-800'>Budget Name</h2>
                                        <h2 className='text-bujit-500 font-semibold'>November Budget</h2>
                                    </div>
                                </div>



                                <div className='flex justify-between items-center'>
                                    <h2 className='text-ash-500'>Select Disbursement Account</h2>
                                    <button onClick={showAdd} className="h-fit w-fit border border-bujit-500 flex items-center text-bujit-500 p-2 rounded-lg">
                                        <img src={add} className="mr-2" />
                                        Add Account
                                    </button>
                                </div>

                                <div className='my-7'>
                                    {
                                        accounts?.map(
                                            (account : any) => (
                                                <AccountCard account={account} set={set}/>
                                            )
                                        )
                                    }
                                </div>

                                <div className='flex justify-center'>
                                    <button className="h-fit w-full max-w-lg text-center text-white mt-9 bg-bujit-500 p-2 rounded-lg">
                                        Proceed With Payment
                                    </button>
                                </div>
                            </div> :
                            <div className='flex items-center flex-col my-9'>
                                <img className="w-24" src={success} />
                                <h2 className='text-bujit-500 text-2xl font-semibold my-8'>Payment Successfull</h2>
                                <div className='flex justify-center w-full'>
                                    <Link to='/dashboard' className="h-fit w-full max-w-lg text-center text-white mt-9 bg-bujit-500 p-2 rounded-lg">
                                        Go to Dashboard
                                    </Link>
                                </div>
                            </div>
                }
            </div>
        </Modal>
    )
}

export default BudgetModal;

function AccountCard({account, set} : any) {
    return (
        <div className='dropdown-shadow w-full cursor-pointer p-3 rounded-lg mb-3' onClick={() => set(account._id)}>
            <h2 className='text-[16px]'>{account.accountName}</h2>
            <h2 className='text-[12px] text-ash-700 mt-1'>{account.accountNumber} {account.bankName}</h2>
        </div>
    )
}