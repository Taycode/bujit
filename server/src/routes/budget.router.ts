import { Router } from 'express';
import { BudgetController } from '../components/budget/budget.controller';
import {validateToken} from "../middleware/auth.middleware";

const budgetController = new BudgetController()
const router: Router = Router();

router.post('/create',validateToken, budgetController.createBudget);
router.post('/verify-payment',validateToken, budgetController.verifyPayment);
router.get('/fetch',validateToken ,budgetController.getAllBudget);
router.get('/fetch/:id',validateToken ,budgetController.getBudget);

export const BudgetRouter: Router = router;
