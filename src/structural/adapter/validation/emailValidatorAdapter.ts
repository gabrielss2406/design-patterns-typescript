import isEmail from "validator/lib/isEmail";
import { EmailValidatorProtocol } from "./emailValidatorProtocol";

// Purpose: Implement the EmailValidatorProtocol interface
//          and use the isEmail function from the validator library
// Why? To adapt the isEmail function to the EmailValidatorProtocol interface
export class EmailValidatorAdapter implements EmailValidatorProtocol {
    isEmail(value: string): boolean {
        return isEmail(value);
    }
}