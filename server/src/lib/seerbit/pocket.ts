import { CreatePocketDto } from './dto/pocket/create-pocket.dto'
import { client } from './client';
import { GetPocketBalanceDto } from './dto/pocket/get-pocket-balance.dto'

export const createPocket = async (payload: CreatePocketDto) => {
    return new Promise((resolve, reject) => {
        client.post('/pocket/api/v2/subpocket/create', payload).then((res) => {
            resolve(res.data);
        })
            .catch((err) => {
                reject(err?.response?.data);
            });
    });
};

export const getPocketBalance = async (payload: GetPocketBalanceDto) => {
    return new Promise((resolve, reject) => {
        client.post('/pocket/api/v2/balance', payload).then((res) => {
            resolve(res.data);
        })
            .catch((err) => {
                reject(err?.response?.data);
            });
    });
};

