export interface PocketOwner {
    businessName: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
}

export interface PocketAccount {
    accountNumber: string;
    bankCode: string;
}

export interface Payload {
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

export interface IGetPocketBalance {
    code: string;
    message: string;
    payload: Payload;
}
