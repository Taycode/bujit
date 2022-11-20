import React from "react";
import { Link } from "react-router-dom";
import Scrollbar from 'react-scrollbar';

// component imports
import BudgetCard from "../components/bujit/BudgetCard";
import BudgetTable from "../components/bujit/BudgetTable";

// assets import
import add from '../assets/add.svg';

function Dashboard() {
    return (
        <div className="py-5 pr-3">
            <h2 className="text-2xl text-gray-500 font-semibold mb-5">Dashboard</h2>

            <div>
                {/* Budget cards */}
                <div className="flex justify-between">
                    <div className="flex flex-wrap w-[calc(100%-154px)]">
                        <BudgetCard style={0} />
                        <BudgetCard style={1} />
                        <BudgetCard style={2} />
                    </div>
                    <Link to="/budgets/create" className="mt-[75px] h-fit w-fit text-white flex bg-bujit-500 p-3 rounded-lg">
                        <img src={add} className="mr-2" />
                        Create Budget
                    </Link>
                </div>

                <h2 className="mt-5">Your next disbursement is <span className="text-bujit-600">&#8358;12,000</span> on <span className="text-bujit-600">30-10-2001</span> from <span className="text-bujit-600">Shopping Budget</span></h2>

                <h2 className="text-xl text-gray-500 font-semibold mt-8 mb-5">Disbursement Report</h2>
                <BudgetTable />
                <div className="flex justify-between">
                    <div className="flex">
                        <h2 className="flex items-center text-[12px] mr-5"><div className="bg-bujit-500 w-2 h-2 rounded-full mr-2"></div>Active Budget</h2>
                        <h2 className="flex items-center text-[12px]"><div className="bg-success-500 w-2 h-2 rounded-full mr-2"></div>Completed Budget</h2>
                    </div>

                    <button className="text-[12px] text-bujit-500 border-b border-bujit-500 px-2">View Report</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;