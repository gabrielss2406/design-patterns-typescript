export type UserAddress = { street: string; number: number }

export interface IUser {
    firstName: string;
    username: string;

    getAddresses(): Promise<UserAddress[]>;
}