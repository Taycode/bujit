import { BudgetStatus, IBudget } from '../../database/model/budget';
import {createPocket, fundPayout} from '../../lib/seerbit/pocket';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { BudgetItemRepository, BudgetRepository } from '../../database/repository/budget.repository';
import { config } from '../../config/config';
import { IUser } from '../../database/model/user';
import {BudgetItemType, IBudgetItem} from "../../database/model/budgetItem";
import {BankRepository} from "../../database/repository/bank.repository";
import mongoose from "mongoose";

const updateNextDate = async(item: IBudgetItem) => {
    const presentDate = new Date(item.date);
    const nextDate = new Date(presentDate);
    nextDate.setDate(nextDate.getDate() + item.interval);
    await BudgetItemRepository.findOneAndUpdate({ _id: item._id }, {
        date: nextDate,
    })
}

export const processBudget = async (budget: IBudget) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() - 1);

    // fetch budget items

    const budgetItems = await BudgetItemRepository.find({
        budgetId: budget._id,
        date: { $gte: today, $lt: tomorrow },
    });

    // calculate amount

    const totalAmount = budgetItems.reduce((prev, next) => prev + next.amount, 0);

    // charge pocket for amount

    await chargeBudgetPocket(budget, totalAmount);

    // update next Date for recurring budgets
    const recurringItems = budgetItems.filter((budget) => budget.type === BudgetItemType.recurring);
    await Promise.all(recurringItems.map(item => {
        updateNextDate(item);
    }))
};

export const chargeBudgetPocket = async (budget: IBudget, amount: number) => {
    const reference = '';
    const bank = await BankRepository.findOne({ _id: budget.bankId });
    if (!bank) throw new Error('Bank not found');
    return fundPayout({
        extTransactionRef: reference,
        amount: amount.toString(),
        debitPocketReferenceId: budget.pocketId,
        type: 'CREDIT_BANK',
        publicKey: config.SEERBIT.PUBLIC,
        bankCode: bank.bankCode,
        accountNumber: bank.accountNumber,
    });
}

export const payBudget = async (budgetId: mongoose.Schema.Types.ObjectId, user: IUser) => {
    return BudgetRepository.findOneAndUpdate(
        {_id: budgetId, status: BudgetStatus.inactive, userId : user._id},
        { status: BudgetStatus.active },
        { new: true },
    );
};


function generateRef(): string {
    return Math.random().toString(36).substring(2,14);
}

export const generatePocketReference = async () : Promise<string> => {
    // Generate reference first
    const reference = generateRef();
    // check DB... if it exist, return the function
    const pocketRef = await BudgetRepository.findOne({pocketReference: reference})
    if (pocketRef){
        return generatePocketReference()
    }
    return reference
};

export const createBudget = async (payload: CreateBudgetDto, user: IUser) => {
    // Generate and check reference
    const reference = await generatePocketReference();
    const pocket = await createPocket({
        reference: reference,
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
        bankId: payload.bankId,
    };

    const newBudget = await BudgetRepository.create(createBudgetPayload);
    const { items } = payload;
    const budgetItemData = items.map(item => ({...item, budgetId: newBudget._id}));
    const newItems = await BudgetItemRepository.createMany(budgetItemData);

    return { budget: newBudget, items: newItems };
};
