export interface FundPayoutDto {
    extTransactionRef: string;
    amount: string;
    debitPocketReferenceId: string;
    type: string;
    publicKey: string;
    bankCode: string;
    accountNumber: string;
}
