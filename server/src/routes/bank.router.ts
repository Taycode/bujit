import {BankController} from "../components/bank/bank.controller";
import {Router} from "express";
import {validateToken} from "../middleware/auth.middleware";

const bankController = new BankController();

const router: Router = Router();

router.post('/create', validateToken, bankController.createBank);
router.get('/fetch', validateToken, bankController.fetchBanks);
router.post('/validate', validateToken, bankController.validateBank);
router.post('/get-banks', validateToken, bankController.getAvailableBanks);


export const BankRouter = router;
