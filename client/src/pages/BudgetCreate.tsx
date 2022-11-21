import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// components import
import BudgetInput from "../components/inputs/BugdetInput";
import BudgetItem from "../components/bujit/BudgetItem";
import BudgetModal from "../components/bujit/BudgetModal";

// assets import
import close from '../assets/close.svg';
import add from '../assets/add2.svg';
import AddAccount from "../components/bujit/AddAccount";
import { getRequest, postRequest } from "../utils/api";

function BudgetCreate({user} : any) {
    const payWithSeerBit = (window as any)?.SeerbitPay;

    const [budgetId, setBudgetId] = React.useState<any>(null);

    const [banks, setBanks] = React.useState();
    const [accounts, setAccounts] = React.useState();

    const [showAccount, setShowAccount] = React.useState(false);
    const [showAdd, setShowAdd] = React.useState(false);

    async function getAccounts() {
        const response = await getRequest('bank/fetch');
        console.log(response)
        if (response?.status == 200) {
            setAccounts(response.data.data);
        }
    }

    async function getBanks() {
        const response = await getRequest('bank/get-banks')
        console.log(response)
        if (response?.status == 200) {
            setBanks(response.data.data.map(
                (bank : any) => {
                    return ({
                        label : bank.bank_name,
                        value : {
                            bank
                        }
                    })
                }
            ));
        }
    }

    const [bugdetData, setBudgetData] = React.useState({
        name : '',
        startDate : '',
        endDate : '',
    })

    const [budgetItems, setBudgetItems] = React.useState([{
        name : '',
        type : '',
        amount : '',
        date : '',
        interval : ''
    }]);

    const [budgetAccount, setBudgetAccount] = React.useState<any>(null)

    function addBudgetItem () {
        setBudgetItems([
            ...budgetItems,
            {
                name : '',
                type : '',
                amount : '',
                date : '',
                interval : ''
            }
        ])
    }

    React.useEffect(
        () => {
            if (budgetAccount) {
                const data = {
                    ...dataToSend,
                    bankId : budgetAccount
                }
    
                console.log(data)
                addBudget(data)
            }
        }, [budgetAccount]
    )

    function removeBudgetItem(ind : number) {
        if (budgetItems.length > 1)
            setBudgetItems(
                budgetItems.filter((item, index) => index !== ind)
            )
    }

    function updateBudgetItems (data : any, index: number) {
        // console.log(data, index, '=> poasdsadsad'
        const newArrat = budgetItems;

        newArrat[index] = data;

        // console.log(newArrat)
        setBudgetItems([...newArrat]);
        // console.log('updates')
    }

    // console.log(bugdetData)

    React.useEffect(() => {
        getBanks();
        getAccounts();
    }, [])

    // console.log(budgetItems)

    const total = React.useMemo(
        () => {
            let sum = 0;
            budgetItems.forEach(({amount}) => {
                // console.log(amount)
                sum += Number(amount);
                // console.log(sum, '=> sum');
            })

            return sum;
        }, [budgetItems]
    )

    const [success, setSuccess] = React.useState(false)

    const [dataToSend, setDataToSend] = React.useState<any>(null) 

    async function validatePayment(data : any) {
        console.log('Validating')
        const response = await postRequest('budget/verify-payment', data)

        console.log(response);
        if (response.status === 200)
            setSuccess(true)
    }

    const handlePayment = React.useCallback(() => {
        console.log(process.env.REACT_APP_SEERBIT_PK, total)
        payWithSeerBit({
            //replace with your public key
            "public_key": process.env.REACT_APP_SEERBIT_PK,
            "tranref": new Date().getTime(),
            "currency": "NGN",
            "country": "NG",
            "amount": total.toString() + '.00',
            "email": user?.email,
            //optional field. Set to true to allow customer set the amount
            "setAmountByCustomer": false,
            "full_name": `${user?.firstName} ${user?.lastName}`, //optional
            // "callbackurl": "http://yourdomain.com",
            },
            function callback(response : any, closeModal : any) {
             console.log(response) //response of transaction
             validatePayment({
                budgetId : budgetId._id,
                reference : response.payments.paymentReference
             })

            //  setBudgetId(null)s
            },
            function close(close : any) {
             console.log(close) //transaction close
            })
    } , [user, total, budgetId])

    function createBudget() {
        const data = {
            ...bugdetData,
            startDate : new Date(bugdetData.startDate),
            endDate : new Date(bugdetData.endDate),
            items : budgetItems.map((budget : any) => {
                return (
                    {
                        ...budget,
                        date : new Date(budget.date)
                    }
                )
            })
        }

        setDataToSend(data);
        setShowAccount(true);
        console.log(data)
    }

    async function addBudget (data : any) {
        const response = await postRequest('budget/create', data);

        console.log(response, '=> create response')
        if (response.status === 201)
            setBudgetId(response.data.data.budget)
        // handlePayment()
    }

    React.useEffect(
        () => {
            if (budgetId) {
                handlePayment()
                // setBudgetId(null)
            }
        }, [budgetId]
    )
    return (
        <div className="py-5 pr-3">
            <div className='flex justify-between'>
                <h2 className="text-2xl text-bujit-500 font-semibold ">Create Budget</h2>
                <Link to="/budgets/create">
                    <img src={close} />
                </Link>
            </div>

            <div className="flex lg:flex-row flex-col justify-between mt-8 mb-10">
                <div className="w-96">
                    <BudgetInput type="text" name="polas" value={bugdetData.name} placeholder="Budget Name"  onChange={(e :any) => setBudgetData({...bugdetData, name : e.value })}/>
                </div>
                <div className="flex lg:flex-row flex-col items-center">
                    <h2 className="mr-2">From</h2>
                    <BudgetInput type="date" name="polasd" value={bugdetData.startDate} placeholder="Start date" onChange={(e : any) => setBudgetData({...bugdetData, startDate : e.value })} />
                    <h2 className="ml-4 mr-2">To</h2>
                    <BudgetInput type="date" name="polasd" value={bugdetData.endDate} placeholder="End date" onChange={(e : any) => setBudgetData({...bugdetData, endDate :  e.value})} />
                </div> 
            </div>

            {
                budgetItems.map(
                    (item, index) => (
                        <BudgetItem onChange={updateBudgetItems} index={index}  remove={removeBudgetItem} data={item}/>
                    )
                )
            }

            <div className="flex justify-end">
                <button onClick={addBudgetItem} className="h-fit w-fit border border-bujit-500 flex text-bujit-500 p-2 rounded-lg">
                    <img src={add} className="mr-2" />
                    Add Budget Item
                </button>
            </div>

            <hr className="my-7 border-t-2 " />

            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 w-full max-w-lg gap-3">
                    <h2 className="text-xl">Budget Timeframe </h2>
                    <h2><span className="text-bujit-500 font-semibold text">20-21-12</span> to <span className="text-bujit-500 font-semibold">30-11-21</span></h2>
                    <h2 className="text-xl">Total Budget Amount</h2>
                    <h2 className="text-bujit-500 font-semibold text-xl">&#8358;{total.toString()}</h2>
                </div>

                <button onClick={createBudget} className="h-fit w-full max-w-xl text-center text-white mt-9 bg-bujit-500 p-2 rounded-lg">
                    Proceed With Payment
                </button>
            </div>

            <BudgetModal success={success} show={showAccount} showAdd={() => setShowAdd(true)} toggle={() => setShowAccount(false)} set={setBudgetAccount} accounts={accounts}/>
            <AddAccount banks={banks} toggle={() => setShowAdd(false)} refresh={getAccounts} show={showAdd} />
        </div>
    )
}

export default BudgetCreate;