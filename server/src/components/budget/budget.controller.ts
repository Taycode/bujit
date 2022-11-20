import {Response} from "express";
import { ICustomRequest } from "../../interface/custom-request.interface";
import { BudgetItemRepository, BudgetRepository } from "../../database/repository/budget.repository";
import {CreateBudgetDto} from "./dto/create-budget.dto";
import {createBudget, payBudget} from "./budget.service";
import {VerifyPaymentDto} from "./dto/verify-payment.dto";
import {verifyPayment} from "../../lib/seerbit/payment";
import { getPockets } from './budget.service';

export class BudgetController {
    async createBudget(req:ICustomRequest, res:Response) {
        const { user } = req;
        const payload: CreateBudgetDto = req.body;
        const createdResponse = await createBudget(payload, user);
        return res.status(201).json({
            message: 'New Budget created',
            data: createdResponse,
        });
    }

    async getAllBudget(req:ICustomRequest, res:Response) {
        const { user } = req;
        const budgets = await BudgetRepository.find({userId : user._id});
        const pockets = await getPockets()
        const result = []
        for (let budget of budgets) {
            const { pocketId } = budget
            const budgetPocket = pockets.find(pocket => (pocket.pocketId == pocketId))

            result.push({...budget, pocketAmount:budgetPocket?.availableBalanceAmount || 0})

        }


        return res.status(200).json({
            message: 'Budgets Retrieved',
            data: result,
        });
    }

    async getBudget(req: ICustomRequest, res:Response){
        const budgetid = req.params.id;

        const budget = await BudgetRepository.findOne({_id: budgetid});
        const items = await BudgetItemRepository.find({budgetId: budgetid});

        return res.status(200).json({
            message: "Budget Retrieved",
            data: {
                budget,
                items
            }
        });
    }

    async verifyPayment(req:ICustomRequest, res:Response) {
        const { user } = req;
        const payload: VerifyPaymentDto = req.body;
        const { paymentReference, budgetId } = payload;
        const verificationResponse = await verifyPayment(paymentReference);
        if (verificationResponse.data.code === '00') {
            const paidBudget = await payBudget(budgetId, user);
            if (paidBudget) {
                return res.status(200).json({
                    message: "Budget payment confirmed",
                });
            }
        }
        return res.status(400).json({
            message: "Budget payment could not confirmed",
        });
    }
}
