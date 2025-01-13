import { IUser, UserAddress } from "./IUser";
import { User } from "./User";

export class ProxyUser implements IUser {
    private realUser: IUser | null = null;
    private realUserAddresses: UserAddress[] | null = null;

    constructor(public firstName: string, public username: string) { }

    private createUser(): IUser {
        if (this.realUser == null)
            this.realUser = new User(this.firstName, this.username)

        return this.realUser
    }

    async getAddresses(): Promise<UserAddress[]> {
        this.realUser = this.createUser()
        if (this.realUserAddresses == null) {
            this.realUserAddresses = await this.realUser.getAddresses();
            return this.realUser?.getAddresses();
        } else {
            return this.realUserAddresses
        }
    }
}