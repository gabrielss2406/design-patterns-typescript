import { User } from "../interfaces/User";

const users: User[] = [];

// Singleton, module way
// This is a singleton because it is a module, and modules are singletons by default
export const MyDatabaseModule = {
    add(user: User): void {
        users.push(user);
    },

    remove(index: number): void {
        users.splice(index, 1);
    },

    show(): void {
        for (const user of users) {
            console.log(user);
        }
    },
};