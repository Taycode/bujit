import mongoose from "mongoose";

export type VerifyPaymentDto = {
    budgetId: mongoose.Schema.Types.ObjectId;
    paymentReference: string;
}
