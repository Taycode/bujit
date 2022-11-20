export interface PocketOwner {
    bankVerificationNumber: string;
    businessName: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface PocketAccount {
    accountNumber: string;
    bankCode: string;
}

export interface Data {
    pocketOwner: PocketOwner;
    last: boolean;
    first: boolean;
    empty: boolean;
    totalPages: number;
    totalElements: number;
    numberOfElements: number;
    size: number;
    number: number;
    pocketAccounts: PocketAccount[];
    pocketId: string;
    status: string;
    pocketFunction: string;
    availableBalanceAmount: number;
    availableBalanceCurrency: string;
    ledgerBalanceCurrency: string;
    ledgerBalanceAmount: number;
    fundingLink: string;
    reference: string;
}

export interface Payload {
    responseCode: string;
    message: string;
    data: Data;
}

export interface ICreatePocket {
    code: string;
    message: string;
    payload: Payload;
}
