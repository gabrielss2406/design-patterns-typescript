import { User } from "../interfaces/User";

export class MyDatabaseClassic {
    private static _instance: MyDatabaseClassic | null = null;
    private users: User[] = [];

    private constructor() { }

    static get instance(): MyDatabaseClassic { // Singleton, classic way
        if (MyDatabaseClassic._instance === null) { // If there is no instance, create one
            MyDatabaseClassic._instance = new MyDatabaseClassic();
        }
        return MyDatabaseClassic._instance; // If there is an instance, return it
    }

    add(user: User): void {
        this.users.push(user);
    }

    remove(index: number): void {
        this.users.splice(index, 1);
    }

    show(): void {
        for (const user of this.users) {
            console.log(user);
        }
    }
}