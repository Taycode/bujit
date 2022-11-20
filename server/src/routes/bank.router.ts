import {BankController} from "../components/bank/bank.controller";
import {Router} from "express";
import {validateToken} from "../middleware/auth.middleware";

const bankController = new BankController();

const router: Router = Router();

router.post('/create', validateToken, bankController.createBank);
router.get('/fetch', validateToken, bankController.fetchBanks);

export const BankRouter = router;
