import { BudgetStatus, IBudget } from '../../database/model/budget';
import { createPocket } from '../../lib/seerbit/pocket';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { BudgetItemRepository, BudgetRepository } from '../../database/repository/budget.repository';
import { config } from '../../config/config';
import { IUser } from '../../database/model/user';

export const processBudget = async (budget: IBudget) => {
    // fetch budget items
    // calculate amount
    // charge pocket for amount
};

export const generatePocketReference = async () => {
    // Generate reference first
    // check DB... if it exist, return the function
};

export const createBudget = async (payload: CreateBudgetDto, user: IUser) => {
    // Generate and check reference
    const reference = '';
    const pocket = await createPocket({
        reference: '',
        publicKey: config.SEERBIT.PUBLIC,
        currency: 'NGN',
        pocketFunction: 'BOTH',
        pocketOwner: {
            bankVerificationNumber: user.bvn,
            businessName: config.SEERBIT.BUSINESS_NAME,
            emailAddress: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
        },
        selfOwned: 'false',
    });
    const pocketId = pocket.payload.data.pocketId;

    const createBudgetPayload: Omit<IBudget, '_id'> = {
        name: payload.name,
        userId: user._id,
        startDate: payload.startDate,
        endDate: payload.endDate,
        status: BudgetStatus.active,
        pocketId,
        pocketReference: reference,
    };

    const newBudget = await BudgetRepository.create(createBudgetPayload);
    const { items } = payload;
    const budgetItemData = items.map(item => ({...item, budgetId: newBudget._id}));
    const newItems = await BudgetItemRepository.createMany(budgetItemData);

    return { budget: newBudget, items: newItems };
};
