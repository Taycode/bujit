import mongoose, { Schema, model, Date } from 'mongoose';

export interface IBudget {
  name: string;
  userId: mongoose.Schema.Types.ObjectId;
  startDate: Date;
  endDate: Date;
  status: string;
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
    default: "active",
    enum: ["active","completed"]
  }
}, { timestamps: true });

export const BudgetModel = model('budget', BudgetSchema);
