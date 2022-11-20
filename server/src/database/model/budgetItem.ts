import mongoose, { Schema, model } from 'mongoose';

export interface IBudgetItem {
  name: string;
  budgetId: mongoose.Schema.Types.ObjectId;
  type: string;
  amount: Number;
  date: Date;
}


const BudgetItemSchema = new Schema<IBudgetItem>({
  budgetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'budget',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['recurring', 'non-recurring']
  },
  date: {
    type: Date,
    required: true
  }

});

export const BudgetItemModel = model('budgetItems', BudgetItemSchema);
