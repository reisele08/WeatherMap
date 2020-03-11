//reference https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

class PasswordEncoder {
    static compare(input, password) {
        bcrypt.compare(input, password).then(function(result) {
            // result == true if they match
            return result;
        });
    }
    static encrypt(input) {
        bcrypt.hash(input, saltRounds).then(function(hash) {
            return hash;
        });
    }

}

// export function encrypt(input) {
//     bcrypt.hash(input, saltRounds).then(function(hash) {
//         return hash;
//     });
// }
//
// export function compare((input, password) {
//     bcrypt.compare(input, password).then(function(result) {
//         // result == true if they match
//         return result;
//     });
// }
//
