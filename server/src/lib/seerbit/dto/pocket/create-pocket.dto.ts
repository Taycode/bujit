interface PocketOwner {
    bankVerificationNumber: string;
    businessName: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface CreatePocketDto {
    reference: string;
    publicKey: string;
    currency: string;
    pocketFunction: string;
    pocketOwner: PocketOwner;
    selfOwned: string;
}
