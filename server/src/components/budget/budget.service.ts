import {IBudget} from "../../database/model/budget";
import { createPocket } from '../../lib/seerbit/pocket';

export const processBudget = async (budget: IBudget) => {
    // fetch budget items
    // calculate amount
    // charge pocket for amount
};

export const createBudgetPocket = async (budget: IBudget) => {
    const pocket = await createPocket({
        reference: '',
        publicKey: '',
        currency: '',
        pocketFunction: '',
        pocketOwner: {
            bankVerificationNumber: '',
            businessName: '',
            emailAddress: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
        },
        selfOwned: '',
    });
};

export const createBudget = async () => {
    // Generate pocket reference
    // Create Pocket
    // get pocketId, pocketReference
    // Create Budget and Budget Items
};
