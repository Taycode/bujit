export interface Payload {
    reference: string;
    amount: number;
    number: string;
    currency: string;
    destination: string;
    institution: string;
    linkingReference: string;
    message: string;
    status: string;
}

export interface IFundPayout {
    code: string;
    message: string;
    payload: Payload;
}
