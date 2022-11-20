import {Response} from "express";
import { ICustomRequest } from "../../interface/custom-request.interface";
import { BudgetItemRepository, BudgetRepository } from "../../database/repository/budget.repository";
import { IBudgetItem } from "../../database/model/budgetItem";
import {CreateBudgetDto} from "./dto/create-budget.dto";
import {createBudget} from "./budget.service";

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

        return res.status(200).json({
            message: 'Budgets Retrieved',
            data: budgets,
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


}
