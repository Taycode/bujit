import { CreatePocketDto } from './dto/pocket/create-pocket.dto';
import { client } from './client';
import { GetPocketBalanceDto } from './dto/pocket/get-pocket-balance.dto';
import { ICreatePocket } from './interface/pocket/create-pocket.interface';
import { IGetPocketBalance } from './interface/pocket/get-pocket-balance.interface';
import { FundPayoutDto } from './dto/pocket/fund-payout.dto';
import { IFundPayout } from './interface/pocket/fund-payout.interface';

export const createPocket = async (payload: CreatePocketDto): Promise<ICreatePocket> => {
    return new Promise((resolve, reject) => {
        client.post('/pocket/api/v2/subpocket/create', payload).then((res) => {
            resolve(res.data);
        })
            .catch((err) => {
                reject(err?.response?.data);
            });
    });
};

export const getPocketBalance = async (payload: GetPocketBalanceDto): Promise<IGetPocketBalance> => {
    return new Promise((resolve, reject) => {
        client.post('/pocket/api/v2/balance', payload).then((res) => {
            resolve(res.data);
        })
            .catch((err) => {
                reject(err?.response?.data);
            });
    });
};

export const fundPayout = async (payload: FundPayoutDto): Promise<IFundPayout> => {
    return new Promise((resolve, reject) => {
        client.post('/pocket/api/v2/payout/transfer', payload).then((res) => {
            resolve(res.data);
        })
            .catch((err) => {
                reject(err?.response?.data);
            });
    });
};

