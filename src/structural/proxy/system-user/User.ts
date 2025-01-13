import { IUser, UserAddress } from "./IUser";

export class User implements IUser {
    constructor(public firstName: string, public username: string) { }

    async getAddresses(): Promise<UserAddress[]> {
        return new Promise((resolve, _) => {
            return setTimeout(() => {
                return resolve([
                    { street: "Inatel", number: 121 },
                    { street: "Henrique Del Castilho", number: 104 }
                ])
            }, 2000)
        })
    }
}