import { Router } from 'express';
import { UserController } from '../components/user/user.controller';

const userController = new UserController();

const router: Router = Router();

router.get('/login', userController.loginUser);
router.post('/register', userController.registerUser);

export const UserRouter: Router = router;
