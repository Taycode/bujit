import {Response} from "express";
import {ICustomRequest} from "../../interface/custom-request.interface";
import {CreateBankDto} from "./dto/create-bank.dto";
import {createBank, fetchUserBanks, validateBankDetails} from "./bank.service";
import {ValidateBankDto} from "./dto/validate-bank.dto";
import {getAvailableBanks} from "../../lib/seerbit/bank";

export class BankController {
    async createBank(req: ICustomRequest, res: Response) {
        const payload: CreateBankDto = req.body;
        const { user } = req;
        const newBank = await createBank(payload, user);
        return res.status(200).json({
            status: true,
            message: 'Bank added successfully',
            data: { bank: newBank },
        });
    }

    async fetchBanks(req: ICustomRequest, res: Response) {
        const { user } = req;
        const banks = await fetchUserBanks(user);
        return res.status(200).json({
            status: true,
            message: 'Banks fetched successfully',
            data: banks,
        });
    }

    async validateBank(req: ICustomRequest, res: Response) {
        const payload: ValidateBankDto = req.body;
        try {
            const validatedAccount = await validateBankDetails(payload);
            return res.status(200).json({
                status: true,
                message: 'Bank details verified',
                data: { name: validatedAccount.payload.accountName },
            });
        } catch (_e) {
            return res.status(400).json({
                status: false,
                message: 'Bank details could not be verified',
            });
        }
    }

    async getAvailableBanks(req: ICustomRequest, res: Response) {
        const getBanksResponse = await getAvailableBanks();
        return res.status(200).json({
            status: true,
            message: 'Banks fetched successfully',
            data: getBanksResponse.payload,
        });
    }
}
