import {IUser} from "../../database/model/user";
import {CreateBankDto} from "./dto/create-bank.dto";
import {BankRepository} from "../../database/repository/bank.repository";

export async function createBank(payload: CreateBankDto, user: IUser) {
    return BankRepository.create({
        ...payload,
        userId: user._id,
    })
}

export async function fetchUserBanks(user: IUser) {
    return BankRepository.find({ userId: user._id });
}
