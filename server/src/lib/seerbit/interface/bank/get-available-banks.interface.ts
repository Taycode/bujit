export interface Payload {
    bank_name: string;
    code: string;
}

export interface IGetAvailableBanks {
    code: string;
    message: string;
    payload: Payload[];
}
