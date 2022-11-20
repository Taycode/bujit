import {Request, Response} from "express";
import { ICustomRequest } from "../../interface/custom-request.interface";
import { BudgetItemRepository, BudgetRepository } from "../../database/repository/budget.repository";
import { IBudgetItem } from "../../database/model/budgetItem";

export class BudgetController {
    async createBudget(req:ICustomRequest, res:Response) {
        const {user} = req;
        const {name, items, start_date, end_date, status} = req.body;
        if (!name){
            res.status(400).send({message:"Budget Name is required"});
        }
        if (!start_date || !end_date) {
            res.status(400).send({message:"Start and End date is required"});
        }

        const data = {
            name,
            startDate: start_date,
            endDate: end_date,
            userId: user._id,
            status
        };

        const newBudget = await BudgetRepository.create(data);
        const budgetItems = items as IBudgetItem[];
        const new_items = budgetItems.map(item => ({...item, budgetId: newBudget._id}));
        const newItems = await BudgetItemRepository.createMany(new_items);


        return res.status(201).json({
            message: 'New Budget created',
            data: {
                name: newBudget.name,
                startDate: newBudget.startDate,
                endDate: newBudget.endDate,
                items: newItems
            }

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
