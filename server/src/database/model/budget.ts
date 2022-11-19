import mongoose, { Schema, model } from 'mongoose';

export interface IBudget {
  name: string;
  userId: string;
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
  }
}, { timestamps: true });

export const BudgetModel = model('budget', BudgetSchema);
