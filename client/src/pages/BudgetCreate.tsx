import React from "react";
import { Link } from "react-router-dom";

// components import
import BudgetInput from "../components/inputs/BugdetInput";
import BudgetItem from "../components/bujit/BudgetItem";

// assets import
import close from '../assets/close.svg';
import add from '../assets/add2.svg';

function BudgetCreate() {
    return (
        <div className="py-5 pr-3">
            <div className='flex justify-between'>
                <h2 className="text-2xl text-bujit-500 font-semibold ">Create Budget</h2>
                <Link to="/budgets/create">
                    <img src={close} />
                </Link>
            </div>

            <div className="flex justify-between mt-8 mb-10">
                <div className="w-96">
                    <BudgetInput type="text" name="polas" value='' placeholder="Budget Name" />
                </div>
                <div className="flex items-center">
                    <h2 className="mr-2">From</h2>
                    <BudgetInput type="date" name="polasd" value="" placeholder="Start date" />
                    <h2 className="ml-4 mr-2">To</h2>
                    <BudgetInput type="date" name="polasd" value="" placeholder="End date" />
                </div>
            </div>
            <BudgetItem />
            <BudgetItem />
            <BudgetItem />

            <div className="flex justify-end">
                <button className="h-fit w-fit border border-bujit-500 flex text-bujit-500 p-2 rounded-lg">
                    <img src={add} className="mr-2" />
                    Add Budget Item
                </button>
            </div>

            <hr className="my-7 border-t-2 "/>

            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 w-full max-w-lg gap-3">
                    <h2 className="text-xl">Budget Timeframe </h2>
                    <h2><span className="text-bujit-500 font-semibold text">20-21-12</span> to <span className="text-bujit-500 font-semibold">30-11-21</span></h2>
                    <h2 className="text-xl">Total Budget Amount</h2>
                    <h2 className="text-bujit-500 font-semibold text-xl">&#8358;12,000</h2>
                </div>

                <button className="h-fit w-full max-w-xl text-center text-white mt-9 bg-bujit-500 p-2 rounded-lg">
                    Proceed With Payment
                </button>
            </div>
        </div>
    )
}

export default BudgetCreate;