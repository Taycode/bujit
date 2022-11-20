import { Router } from 'express';
import { BudgetController } from '../components/budget/budget.controller';
import {validateToken} from "../middleware/auth.middleware";

const budgetController = new BudgetController()
const router: Router = Router();

router.post('/create',validateToken, budgetController.createBudget);
router.get('/fetch',validateToken ,budgetController.getAllBudget);
router.get('/fetch/:id',validateToken ,budgetController.getBudget);

const BudgetRouter: Router = router;
export default BudgetRouter;
 