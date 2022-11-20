import { Express, Request, Response } from 'express';
import BudgetRouter from './budget.router';
import { UserRouter } from './user.router';
import {BankRouter} from "./bank.router";

export const Route = (app: Express) => {
  app.use('/budget', BudgetRouter);
  app.use('/user', UserRouter);
  app.use('/bank', BankRouter);
  app.get('/', async (req: Request, res: Response) => {
    res.send('Hello World');
  });
  return app;
};
