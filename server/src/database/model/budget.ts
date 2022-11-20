import mongoose, { Schema, model, Date } from 'mongoose';

export enum BudgetStatus {
    active = 'active',
    completed = 'completed',
}

export interface IBudget {
  name: string;
  userId: mongoose.Schema.Types.ObjectId;
  startDate: Date;
  endDate: Date;
  status: BudgetStatus;
}

const BudgetSchema = new Schema<IBudget>({
  name: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: BudgetStatus.active,
    enum: BudgetStatus,
  }
}, { timestamps: true });

export const BudgetModel = model('budget', BudgetSchema);
