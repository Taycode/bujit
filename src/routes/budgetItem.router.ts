import { Router, Request, Response } from "express";
import { budgetItem } from "../database/model/budgetItem";

const router: Router = Router()

router.get('/:budgetid', async (req:Request, res:Response) => {
    
})