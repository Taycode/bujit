import React from "react";
import Select from "react-select";
import { toast } from 'react-toastify'
// component import
import Loader from "../Loader";
import Modal from "../Modal";
import Input from "../inputs/Input";
import { postRequest } from "../../utils/api";


function AddAccount({ banks, toggle, show, refresh }: any) {
    const [loading, setLoading] = React.useState<boolean>(false);

    const customStyles = { // react select custom styles
        control: (base: any, state: any) => ({
            ...base,
            // height: '3rem',
            margin: '0px',
            width: '100%',
            borderRadius: "0.375rem",
            color: 'rgba(130, 154, 177, 1)',
            border: 'none',
            backgroundColor: '#EDEDED',
        }),
        input: (base: any, state: any) => ({
            ...base,
            color: 'rgba(130, 154, 177, 1)',
        })

    };

    const [accountDetails, setAccountDetails] = React.useState<any>({
        bank: null,
        number: '',
        name: ''
    })

    function updateData(field: string, value: any) {
        setAccountDetails({
            ...accountDetails,
            [field]: value
        })
    }



    const { bank, number } = accountDetails;

    const [name, setName] = React.useState('')

    async function validateAccount() {
        setLoading(true)
        console.log(bank, 'baksdasd')
        const response = await postRequest('bank/validate', {
            accountNumber: number,
            bankCode: bank?.bank?.code
        })
        setLoading(false)
        // console.log(response.data.data.name);

        if (response.status === 200) {
            setName(response.data.data.name)
        } else {
            toast.error('The bank account is not verified');

        }
    }

    async function addAccount() {
        setLoading(true)
        const response = await postRequest('bank/create', {
            bankCode : bank.bank.code,
            bankName : bank.bank.bank_name,
            accountName : name,
            accountNumber : number
        });
        setLoading(false);
        setName('');

        if (response?.status === 200) {
            refresh();
            toggle();
            toast.success('account added')

        } else {
            toast.error('error occured')
        }
    }

    React.useEffect(() => {
        if (bank && number?.length === 10)
            validateAccount()
    }, [accountDetails])

    // console.log(name, '=> name')
    return (
        <Modal show={show} toggle={() => { }}>
            <div className="w-full max-w-lg bg-white relative">
                {
                    loading ?
                        <div className='absolute w-full h-full z-10 bg-secondary-500/90 flex flex-col justify-center items-center'>
                            <Loader className='h-12 mb-2' />
                            <h2 className='text-bujit-500 text-center text-xl font-semibold'>{name ? 'Adding your account..' : 'Validating your account...'}</h2>
                        </div> : <></>
                }

                <div className="p-8">
                    <h2 className="text-bujit-500 text-xl mb-5 font-semibold">Add Account</h2>
                    <Input name="number" placeholder="Account Number" status={null} value={number} type="text" onChange={(e: any) => updateData(e.name, e.value)} />
                    <div className="mb-10">
                        <Select styles={customStyles} options={banks} placeholder="Banks" onChange={(e: any) => updateData('bank', e.value)} />
                    </div>
                    <Input name="pasds" placeholder="Account Name" status={null} value={name} type="text" />


                    <button onClick={addAccount} className="h-fit w-full text-center text-white mt-9 bg-bujit-500 p-2 rounded-lg">
                        Add Account
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default AddAccount;