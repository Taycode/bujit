import { BudgetStatus, IBudget } from '../../../database/model/budget';
import mongoose, { Date } from 'mongoose';
import { IBudgetItem } from '../../../database/model/budgetItem';

export type CreateBudgetDto = {
    name: string;
    userId: mongoose.Schema.Types.ObjectId;
    startDate: Date;
    endDate: Date;
    status: BudgetStatus;
    items: IBudgetItem[];
};
