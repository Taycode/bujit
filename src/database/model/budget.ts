import mongoose, { Schema, model} from "mongoose";

const BudgetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    }
},{timestamps: true})

export const budget = model('budget', BudgetSchema)