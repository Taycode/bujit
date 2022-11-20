export interface Payments {
    redirectLink: string;
    amount: number;
    email: string;
    mobilenumber: string;
    publicKey: string;
    paymentType: string;
    productId: string;
    productDescription: string;
    maskedPan: string;
}

export interface Data {
    code: string;
    payments: Payments;
}

export interface IVerifyPayment {
    status: string;
    data: Data;
}
