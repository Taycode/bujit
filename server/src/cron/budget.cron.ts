import cron from 'node-cron';
import { budgetQueue } from '../worker/queues';

const PayBudget = () => {
    cron.schedule('5 * * * * *', () => {
        // Fetch Budget
    });
};

export const BudgetCron = () => {
    PayBudget();
};
