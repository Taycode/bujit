import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Route } from './routes';
import { Database } from './database';
import { Cron } from './cron';
import { Tasks } from "./worker/tasks";
import { ExpressAdapter } from '@bull-board/express';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/dist/src/queueAdapters/bull';
import { budgetQueue } from './worker/queues';

export const App = {
  async boot () {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    await Database.connect();
    Route(app);
    const serverAdapter = new ExpressAdapter();
    serverAdapter.setBasePath('/admin/queues');
      createBullBoard({
          queues: [new BullAdapter(budgetQueue)],
          serverAdapter,
      });
    app.use('/admin/queues', serverAdapter.getRouter());
    Cron();
    Tasks();
    return app;
  }
};
