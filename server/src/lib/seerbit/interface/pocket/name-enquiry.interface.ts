export interface Payload {
    accountName: string;
}

export interface INameEnquiry {
    payload: Payload;
    message: string;
    code: string;
}
