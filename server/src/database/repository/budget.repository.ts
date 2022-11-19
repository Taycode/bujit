import { BaseRepository } from './base';
import { BudgetModel } from '../model/budget';
import { IBudget } from '../model/budget';

export class BudgetRepository extends BaseRepository<IBudget>{
constructor () {
    super(BudgetModel);
}
}
