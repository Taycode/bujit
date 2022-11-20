import {client} from "./client";
import {IVerifyPayment} from "./interface/payment/verify-payment.interface";

export const verifyPayment = async (paymentReference: string) => {
    return new Promise<IVerifyPayment>((resolve, reject) => {
        client.get(`/api/v2/payments/query/${paymentReference}`).then((res) => {
            resolve(res.data);
        })
            .catch((err) => {
                reject(err?.response?.data);
            });
    });
};
