import {Response} from "express";
import {ICustomRequest} from "../../interface/custom-request.interface";
import {CreateBankDto} from "./dto/create-bank.dto";
import {createBank, fetchUserBanks} from "./bank.service";

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
}
