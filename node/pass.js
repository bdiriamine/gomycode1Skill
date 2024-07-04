const generatePassword = require('generate-password');
function generateRandomPassword() {
    const passwordOptions = {
        length: 10, 
        numbers: true, 
        symbols: true, 
        uppercase: true, 
        lowercase: true, 
        excludeSimilarCharacters: true,
    };
    const password = generatePassword.generate(passwordOptions);
    return password;
}
const generatedPassword = generateRandomPassword();
console.log("Generated Password:", generatedPassword);