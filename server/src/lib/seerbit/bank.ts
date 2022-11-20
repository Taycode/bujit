import {client} from "./client";
import {config} from "../../config/config";
import {IGetAvailableBanks} from "./interface/bank/get-available-banks.interface";

export const getAvailableBanks = async () => {
    const payload = { publicKey: config.SEERBIT.PUBLIC };
    return new Promise<IGetAvailableBanks>((resolve, reject) => {
        client.post('/pocket/api/v2/payout/banks', payload).then((res) => {
            resolve(res.data);
        })
            .catch((err) => {
                reject(err?.response?.data);
            });
    });
}
