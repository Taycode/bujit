export type VerifyPaymentDto = {
    budgetId: mongoose.Schema.Types.ObjectId;
    paymentReference: string;
}
