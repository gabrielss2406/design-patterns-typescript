import { emailValidatorFnAdapter } from "./validation/emailValidationFnAdapter";
import { EmailValidatorAdapter } from "./validation/emailValidatorAdapter";
import { EmailValidatorProtocol, FnEmailValidatorProtocol } from "./validation/emailValidatorProtocol";

// Have no idea what the validator library is, but it seems to be a library that validates emails
// This function is not from the pattern, is a example of how to use the EmailValidatorAdapter class
function validaEmailClass( // Purpose: Validate an email using the EmailValidatorAdapter class, only if it is valid
    emailValidator: EmailValidatorProtocol,
    email: string,
): void {
    if (emailValidator.isEmail(email)) {
        console.log('Email é válido (CLASS)');
    } else {
        console.log('Email é inválido (CLASS)');
    }
}

function validaEmailFn(
    emailValidator: FnEmailValidatorProtocol,
    email: string,
): void {
    if (emailValidator(email)) {
        console.log('Email é válido (FN)');
    } else {
        console.log('Email é inválido (FN)');
    }
}


validaEmailClass(new EmailValidatorAdapter(), 'gabrielss2406@gmail.com');
validaEmailFn(emailValidatorFnAdapter, 'gabrielss2406@gmail.com');

// Normal Example 
console.log(emailValidatorFnAdapter("emailerrado")) // false