import { budgetQueue } from "../queues";
import {Job} from "bull";
import {IBudget} from "../../database/model/budget";

export const budgetTask = () => {
    budgetQueue.process((job: Job<IBudget>, done) => {
        // Process each budget payout
        done();
    });
};
