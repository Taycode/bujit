import { Router, Request, Response } from "express";
import { budget } from "../database/model/budget";


const router: Router = Router()

// get budget by user Id
router.get('/:userId', async (req: Request, res:Response) => {
    const userId = req.params.userId
    const budgets = await budget.find({userId: userId})

    res.status(200).send(budgets)
})

//create a budget
router.post('/:userId', async (req:Request, res:Response) => {
    const new_budget = new budget({
        name: req.body.name,
        userId: req.params.userId
    }).save()
})

export const BudgetRouter: Router = router