import {IUser} from "../../database/model/user";
import {CreateBankDto} from "./dto/create-bank.dto";
import {BankRepository} from "../../database/repository/bank.repository";
import {ValidateBankDto} from "./dto/validate-bank.dto";
import {nameEnquiry} from "../../lib/seerbit/pocket";
import {config} from "../../config/config";

export async function createBank(payload: CreateBankDto, user: IUser) {
    return BankRepository.create({
        ...payload,
        userId: user._id,
    })
}

export async function fetchUserBanks(user: IUser) {
    return BankRepository.find({ userId: user._id });
}

export async function validateBankDetails(payload: ValidateBankDto) {
    return nameEnquiry({
        accountNumber: payload.accountNumber,
        bankCode: payload.bankCode,
        publicKey: config.SEERBIT.PUBLIC,
    });
}
