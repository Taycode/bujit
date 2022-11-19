import React from "react";
import Scrollbar from 'react-scrollbar';
import BudgetCard from "../components/bujit/BudgetCard";

// component imports

function Dashboard() {
    return (
        <div className="py-5">
            <h2 className="text-2xl">Dashboard</h2>

            <div>
                <BudgetCard  style={1}/>
            </div>
        </div>
    )
}

export default Dashboard;