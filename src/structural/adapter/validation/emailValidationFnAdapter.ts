import isEmail from "validator/lib/isEmail";
import { FnEmailValidatorProtocol } from "./emailValidatorProtocol";

// Purpose: Implement the emailValidatorFnAdapter function
// Diference: This function is not a class, is a function
// This is similar to the EmailValidatorAdapter class, but it is a function
export const emailValidatorFnAdapter: FnEmailValidatorProtocol = (
    value: string,
): boolean => {
    return isEmail(value);
};