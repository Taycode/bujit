import { BaseRepository } from './base';
import { BudgetModel } from '../model/budget';
import { IBudget } from '../model/budget';

export const BudgetRepository = new BaseRepository<IBudget>(BudgetModel);
