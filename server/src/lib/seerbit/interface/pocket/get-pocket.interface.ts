import { PocketOwner } from "./create-pocket.interface";

export interface PocketData {
    createdAt: string;
    pocketId: string
    status: string
    pocketFunction: string;
    availableBalanceAmount: number;
    availableBalanceCurrency: string;
    ledgerBalanceAmount: number;
    ledgerBalanceCurrency: string;
    fundingLink: string
    pocketOwner: Omit<PocketOwner,"bankVerficationNumber">;
    reference: string
}

export interface IGetPocket {
    code: string;
    message: string;
    payload: PocketData[]
}

