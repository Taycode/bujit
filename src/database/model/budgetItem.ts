import mongoose, { Schema, model } from "mongoose"

const BudgetItemSchema = new Schema({
    budgetId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'budget',
        required: true
    },
    item: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["recurring","non-recurring"]
    }

})

export const budgetItem = model('budgetItems', BudgetItemSchema);