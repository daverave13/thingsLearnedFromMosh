// 1 == 00000001
// 1 byte == 8 bits

// 2 == 00000010

// Bitwise or has only one |
console.log( 1 | 2 );
// the above code will be evaluated like so:
//  00000001  == 1
// |00000010  == 2
//  00000011  == 3

console.log( 1 & 2);
//  00000001  == 1
// &00000010  == 2
//  00000000

// Useful for access control
// 00000100 == r--
// 00000111 == rwx
// 00000110 == rw-

const readPermission = 4; // 00000100
const writePermission = 2 // 00000010
const executePermission = 1 // 00000001

let myPermission = 0;

// Give yourself some permission:
myPermission = readPermission | writePermission | executePermission;
console.log(myPermission); // 7 == 00000111 == rwx

// Check if someone has specific permissions:
let somePermission = readPermission | writePermission;
if (somePermission & writePermission) {console.log("User has writePermission");
};
