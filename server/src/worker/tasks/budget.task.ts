import { budgetQueue } from "../queues";
import {Job} from "bull";
import {IBudget} from "../../database/model/budget";
import {processBudget} from "../../components/budget/budget.service";

export const budgetTask = () => {
    budgetQueue.process(async (job: Job<IBudget>, done) => {
        // Process each budget payout
        const budget = job.data;
        await processBudget(budget);
        done();
    });
};
