import { Express, Request, Response } from 'express';
import { BudgetRouter } from './budget.router';

export const Route = (app: Express) => {
  app.use('/budget', BudgetRouter);
  app.get('/', async (req: Request, res: Response) => {
    res.send('Hello World');
  });
  return app;
};
