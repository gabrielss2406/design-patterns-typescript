export interface EmailValidatorProtocol { // Purpose: Define the interface for the EmailValidatorAdapter class
    isEmail(value: string): boolean;
}

export interface FnEmailValidatorProtocol { // Purpose: Define the interface for the emailValidatorFnAdapter function
    (value: string): boolean;
}